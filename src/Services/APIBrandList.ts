import { IBrand } from "../Types";
import { DataURL } from "./URLS";

export default async function () {
  const res = await fetch(DataURL);
  const data = await res.json();
  return data as IBrand[];
}
