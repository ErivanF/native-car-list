import { View } from "react-native";
import Layout from "../Layout";
import TextInputField from "../Components/TextInputField";

export default function LoginScreen() {
  return (
    <Layout title="Login">
      <View className="w-full flex-1 items-center justify-center">
        <View className=" max-h-fit p-2 border-4 border-purple-900 w-10/12 text-center rounded-3xl justify-center">
          <TextInputField label="User"></TextInputField>
          <TextInputField label="Password"></TextInputField>
        </View>
      </View>
    </Layout>
  );
}
