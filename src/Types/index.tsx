import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Login: undefined;
  Home: undefined;
};
export type NavigationProps = NativeStackScreenProps<StackParamList>;

export interface IUser {
  id: number;
  name: string;
  token: string;
}
export interface LoginProps {
  user: string;
  password: string;
}
export interface LoginResponse {
  error: boolean;
  message?: string;
  user?: IUser;
}
export interface IBrand {
  codigo: number;
  nome: string;
}
