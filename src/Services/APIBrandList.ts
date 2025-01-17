import { IBrand } from "../Types";
import { DataURL } from "./URLS";

export default async function BrandList() {
  const res = await fetch(DataURL);
  const data = await res.json();
  console.log(data);
  return data as IBrand[];
}
