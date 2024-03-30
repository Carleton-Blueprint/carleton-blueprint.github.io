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
  const res = await client.getEntries({ content_type: "navLinks" });
  if (res.items.length === 0) throw new Error("No pages found");

  const raw = res.items[0].fields.links as { fields: PageDataType }[];
  if (!raw) throw new Error("No links found");

  return raw.map((item) => item.fields) as PageDataType[];
}

export default client;
