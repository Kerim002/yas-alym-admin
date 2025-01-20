"use server";

import { cookies } from "next/headers";

export async function accessToken() {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken");
}
