import { Text, TouchableWithoutFeedback, View } from "react-native";
import { IBrand } from "../Types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  brand: IBrand;
  navigate: (code: number) => void;
}
export default function BrandCard({ brand, navigate }: Props) {
  return (
    <View className="flex flex-row items-center justify-between m-2 p-2 w-10-12 bg-white rounded-md border-purple-900 border-2">
      <Text className="text-purple-800 text-xl">{brand.nome}</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          navigate(brand.codigo);
        }}
      >
        <FontAwesome name="chevron-right" size={24} color="#581c87" />
      </TouchableWithoutFeedback>
    </View>
  );
}
