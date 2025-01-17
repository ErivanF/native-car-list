import { ScrollView, Text, View } from "react-native";
import { IModel, StackParamList } from "../Types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import ModelList from "../Services/APIModelList";
import ModelCard from "../Components/ModelCard";

type Props = NativeStackScreenProps<StackParamList, "Model">;

export default function ModelScreen({ route }: Props) {
  const [list, setList] = useState<IModel[]>([]);
  const load = async () => {
    const data = ModelList(route.params.brandId);
    setList(await data);
  };
  useEffect(() => {
    load();
  });
  return (
    <Layout title="Modelos">
      <ScrollView className="w-10/12">
        {list.map((model) => {
          return <ModelCard model={model} />;
        })}
      </ScrollView>
    </Layout>
  );
}
