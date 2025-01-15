import { ReactNode } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  title: string;
  children: ReactNode;
  onReturn?: () => void;
}

export default function Layout({ title, children, onReturn }: Props) {
  return (
    <View className="flex-1 items-center  bg-white">
      <View className="flex flex-row justify-between p-3 bg-purple-950 text-center items-center w-full pt-9">
        <Text className="text-white text-2xl">{title}</Text>
        {onReturn && (
          <TouchableWithoutFeedback
            onPress={() => {
              onReturn();
            }}
          >
            <View className="h-8 w-8 mr-4">
              <FontAwesome name="chevron-left" size={24} color="#fff" />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
      {children}
    </View>
  );
}
