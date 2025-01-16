import { Text, TouchableWithoutFeedback, View } from "react-native";
import Layout from "../Layout";
import TextInputField from "../Components/TextInputField";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Login from "../Services/APILogin";

export default function LoginScreen() {
  const { register, setValue, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const submitData = async (data: FieldValues) => {
    try {
      const { user, password } = data;
      if (!user || !password) {
        throw new Error("Usuário e senha são obrigatórios");
      }
      Login({ user, password }).then((response) => {
        console.log(response);
      });
    } catch (err: any) {
      console.log("Erro: " + err);
      setError(err.message);
    }
  };
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
          <View>
            <Text className="mt-2 text-red-500 text-sm">{error}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={handleSubmit((data) => submitData(data))}
          >
            <View className="mt-4 px-4 py-2 bg-purple-900 rounded-lg w-40">
              <Text className="text-xl text-center font-bold text-white ">
                Entrar
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={handleSubmit((data) => submitData(data))}
          >
            <View className="mt-4 px-4 py-2 bg-purple-900 rounded-lg w-40">
              <Text className="text-xl text-center font-bold text-white ">
                Home
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Layout>
  );
}
