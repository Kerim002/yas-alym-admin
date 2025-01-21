import axios, { type CreateAxiosDefaults } from "axios";

import { API_URL } from "../config";
import { tokenService } from "../service/auth-token.service";
import { errorCatch } from "./error";
import { refreshService } from "../service/refresh.service";
import { getCookie } from "cookies-next/client";

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

const axiosClassic = axios.create(options);

axiosClassic.interceptors.request.use((config) => {
  const language =
    JSON.parse(localStorage.getItem("language") || "{}").state?.language ||
    "tkm";
  config.headers["accept-language"] = language;
  return config;
});

const axiosWithAuth = axios.create(options);
axiosWithAuth.interceptors.request.use((config) => {
  if (config?.headers && getCookie("accessToken")) {
    config.headers.Authorization = `Bearer ${getCookie("accessToken")}`;
  }
  config.withCredentials = true;
  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = false;
      try {
        await refreshService.refreshTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired")
          tokenService.removeTokenFromStorage();
      }
    }

    throw error;
  }
);

export { axiosClassic, axiosWithAuth };
