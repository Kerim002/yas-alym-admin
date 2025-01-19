"use server";

import { cookies } from "next/headers";
import { loginPostMutation } from "../api/login";
type Keys = keyof LoginPayload;
export async function onLoginFormAction(body: LoginPayload) {
  const cookieStore = await cookies();
  const token = await loginPostMutation(body);
  cookieStore.set({
    name: "accessToken",
    value: token,
  });
}
