import { Text, TouchableWithoutFeedback, View } from "react-native";
import Layout from "../Layout";
import TextInputField from "../Components/TextInputField";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function LoginScreen() {
  const { register, setValue, handleSubmit } = useForm();
  useEffect(() => {
    register("user");
    register("password");
  }, [register]);
  return (
    <Layout title="Login">
      <View className="w-full flex-1 items-center justify-center">
        <View className=" max-h-fit p-2 border-4 border-purple-900 w-10/12 text-center items-center rounded-3xl justify-center">
          <TextInputField
            label="Nome de usuário"
            placeholder="Insira o nome de usuário"
            onChangeText={(text) => setValue("user", text)}
          ></TextInputField>
          <TextInputField
            label="Senha"
            placeholder="Insira a senha"
            secureTextEntry
            onChangeText={(text) => setValue("password", text)}
          ></TextInputField>
          <TouchableWithoutFeedback
            onPress={handleSubmit((data) => console.log(data))}
          >
            <View className="mt-4 px-4 py-2 bg-purple-900 rounded-lg w-40">
              <Text className="text-xl text-center font-bold text-white ">
                Entrar
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Layout>
  );
}
