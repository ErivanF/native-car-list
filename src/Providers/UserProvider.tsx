import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../Types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface props {
  children: ReactNode;
}
interface IUserContext {
  get: () => IUser;
  set: (user: IUser) => void;
}
const UserContext = createContext<IUserContext>({} as IUserContext);
export default function UserProvider({ children }: props) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const value = {
    get: () => user,
    set: (newUser: IUser) => {
      setUser(newUser);
      AsyncStorage.setItem("@car-list/user", JSON.stringify(newUser));
    },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export const UseUser = () => useContext(UserContext);
