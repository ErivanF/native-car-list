import { useEffect } from "react";
import Layout from "../Layout";
import { Text } from "react-native";
import APIBrandList from "../Services/APIBrandList";
import { UseUser } from "../Providers/UserProvider";

export default function HomeScreen() {
  useEffect(() => {
    APIBrandList();
  }, []);
  const userContext = UseUser();
  return (
    <Layout title="Home">
      <Text className="text-3xl">
        {"Seja bem vindo, " + userContext.get().name}
      </Text>
    </Layout>
  );
}
