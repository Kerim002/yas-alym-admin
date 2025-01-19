export const loginPostMutation = async (body: LoginPayload) => {
  const data = (await fetch("http://95.85.125.54:2025/user/api/v0/auth/login", {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "content-type": "application/json" },
  }).then((r) => r.json())) as string;
  return data;
};
