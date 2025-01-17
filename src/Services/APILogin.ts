import { LoginProps, LoginResponse } from "../Types";
import { LoginURL } from "./URLS";

export default async function Login({ user, password }: LoginProps) {
  const body = JSON.stringify({ user, password });
  const response = await fetch(LoginURL, {
    headers: {
      "Content-Type": "application/json",
    },

    method: "POST",
    body: body,
  });
  const data = await response.json();
  return data as LoginResponse;
}
