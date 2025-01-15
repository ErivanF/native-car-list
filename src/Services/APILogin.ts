interface LoginProps {
  user: string;
  password: string;
}
export default function Login({ user, password }: LoginProps) {
  console.log(user);
  console.log(password);
}
