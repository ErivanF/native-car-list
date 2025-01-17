import { IModel } from "../Types";
import { DataURL } from "./URLS";

export default async function ModelList(code: number) {
  const url = `${DataURL}/${code}/modelos`;
  const res = await fetch(url);
  const data = await res.json();
  return data as IModel[];
}
