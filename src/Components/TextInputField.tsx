import { Text, TextInput, TextInputProps, View } from "react-native";
interface Props extends TextInputProps {
  label: string;
}
export default function TextInputField({ label, ...inputProps }: Props) {
  return (
    <View className=" m-auto p-2  w-full text-center rounded ">
      <Text className="text-purple-800 text-center text-xl">{label}</Text>
      <TextInput
        className="bg-white rounded-md border-purple-900 border-2"
        {...inputProps}
      />
    </View>
  );
}
