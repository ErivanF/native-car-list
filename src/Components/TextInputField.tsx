import { Text, TextInput, TextInputProps, View } from "react-native";
interface Props extends TextInputProps {
  label: string;
}
export default function TextInputField({ label, ...inputProps }: Props) {
  return (
    <View className="p-2">
      <Text className="text-white">{label}</Text>
      <TextInput {...inputProps} />
    </View>
  );
}
