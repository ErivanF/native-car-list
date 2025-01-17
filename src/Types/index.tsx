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
