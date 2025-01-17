import { Text, View } from "react-native";
import { IBrand } from "../Types";

export default function BrandCard({ codigo, nome }: IBrand) {
  return (
    <View className="flex flex-row items-center justify-between m-2 p-2 w-10-12 bg-white rounded-md border-purple-900 border-2">
      <Text className="text-purple-800 text-xl">{nome}</Text>
    </View>
  );
}
