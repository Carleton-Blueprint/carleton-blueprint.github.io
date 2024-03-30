import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export type PageDataType = {
  name: string;
  href: string;
};

export async function fetchPages() {
  const res = await client.getEntries();
  return res.items.map((item) => item.fields) as PageDataType[];
}

export default client;
