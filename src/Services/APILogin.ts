import { DataURL, LoginURL } from "./URLS";

interface LoginProps {
  user: string;
  password: string;
}
export default async function Login({ user, password }: LoginProps) {
  const body = JSON.stringify({ user, password });
  const response = await fetch(LoginURL, { method: "POST", body });
  const data = await response.json();
  console.log("Body: ", body);
  console.log("API Response: ", data);
  throw new Error("Error test");
}
