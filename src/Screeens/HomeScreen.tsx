import { useEffect, useState } from "react";
import Layout from "../Layout";
import { ScrollView, Text } from "react-native";
import APIBrandList from "../Services/APIBrandList";
import { UseUser } from "../Providers/UserProvider";
import { IBrand } from "../Types";
import BrandCard from "../Components/BrandCard";

export default function HomeScreen() {
  const [list, setList] = useState<IBrand[]>([]);
  const loadList = async () => {
    setList(await APIBrandList());
  };
  useEffect(() => {
    loadList();
  }, []);
  const userContext = UseUser();
  return (
    <Layout title="Home">
      <Text className="text-3xl">
        {"Seja bem vindo, " + userContext.get().name}
      </Text>
      <ScrollView className="w-10/12">
        {list.map((brand) => (
          <BrandCard {...brand} key={brand.codigo} />
        ))}
      </ScrollView>
    </Layout>
  );
}
