import { DataURL } from "./URLS";

export default async function () {
  const res = await fetch(DataURL);
  const data = await res.json();
  console.log(data);
}
