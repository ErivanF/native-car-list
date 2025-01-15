import { Text, TextInput, View } from "react-native";
import Layout from "../Layout";
import TextInputField from "../Components/TextInputField";

export default function LoginScreen() {
  return (
    <Layout title="Login">
      <TextInputField label="user"></TextInputField>
    </Layout>
  );
}
