import { useEffect, useState } from "react";
import Layout from "../Layout";
import { ScrollView, Text } from "react-native";
import { UseUser } from "../Providers/UserProvider";
import { IBrand, NavigationProps } from "../Types";
import BrandCard from "../Components/BrandCard";
import BrandList from "../Services/APIBrandList";

export default function HomeScreen({ navigation }: NavigationProps) {
  const [list, setList] = useState<IBrand[]>([]);
  const load = async () => {
    setList(await BrandList());
  };
  useEffect(() => {
    load();
  }, []);
  const userContext = UseUser();

  const navigate = (code: number) => {
    navigation.push("Model", { brandId: code });
  };
  return (
    <Layout title="Home">
      <Text className="text-3xl">
        {"Seja bem vindo, " + userContext.get().name}
      </Text>
      <ScrollView className="w-10/12">
        {list.map((brand) => (
          <BrandCard key={brand.codigo} brand={brand} navigate={navigate} />
        ))}
      </ScrollView>
    </Layout>
  );
}
