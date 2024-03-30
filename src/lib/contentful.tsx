import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function fetchPages() {
  const res = await client.getEntry("61ExBXrQU5eIsFvZJSEKda");
  console.log(res);
  return res;
}

export default client;
