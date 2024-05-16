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

export type ContactCardDataType = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export async function fetchPages() {
  const res = await client.getEntries({ content_type: "navLinks", select: ["fields"], limit: 1 });

  if (res.items.length === 0) throw new Error("No pages found");

  const raw = res.items[0].fields.links as { fields: PageDataType }[];
  if (!raw) throw new Error("No links found");

  return raw.map((item) => item.fields) as PageDataType[];
}

export async function fetchContact() {
  const res = await client.getEntries({ content_type: "contact", select: ["fields"], limit: 1 });
  if (res.items.length === 0) throw new Error("No contact cards found");

  const raw = res.items[0].fields.contactCards as { fields: ContactCardDataType }[];
  if (!raw) throw new Error("No contact cards found");

  return raw.map((item) => item.fields) as ContactCardDataType[];
}

export default client;
