import { useEffect } from "react";
import Layout from "../Layout";
import { Text } from "react-native";
import APIBrandList from "../Services/APIBrandList";

export default function HomeScreen() {
  useEffect(() => {
    APIBrandList();
  }, []);
  return (
    <Layout title="Home">
      <Text>Home Screen</Text>
    </Layout>
  );
}
