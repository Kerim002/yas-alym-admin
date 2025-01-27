"use server";

import { cookies } from "next/headers";
import { loginPostMutation } from "../api/login";

export async function onLoginFormAction(body: LoginPayload) {
  const cookieStore = await cookies();
  try {
    const token = await loginPostMutation(body);
    if (typeof token === "string") {
      cookieStore.set({
        name: "accessToken",
        value: token,
      });

      return {
        success: true,
        redirectTo: "/courses",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Login failed",
    };
  }
}
