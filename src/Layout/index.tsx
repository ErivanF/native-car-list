import { ReactNode } from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>{title}</Text>
      {children}
    </View>
  );
}
