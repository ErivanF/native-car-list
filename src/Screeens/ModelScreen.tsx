import { Text, View } from "react-native";
import { StackParamList } from "../Types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackParamList, "Model">;
export default function ModelScreen({ route }: Props) {
  return (
    <View>
      <Text>Model {route.params.brandId}</Text>
    </View>
  );
}
