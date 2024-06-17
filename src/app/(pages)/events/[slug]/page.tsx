import { NotionRenderer } from "react-notion";
import { Separator } from "@/components/ui/separator";

const getAllPosts = async (NOTION_BLOG_ID: string) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${NOTION_BLOG_ID}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());
};

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const allPosts = await getAllPosts(params.slug); //staticProps.props.posts;
  const title = (Object.values(allPosts) as any)[0].value.properties
    .title[0][0];
  return (
    <div className="flex flex-col items-center justify-center pt-12" style={{ backgroundColor: '#E7F2FD' }}>
      <h1 className="text-5xl font-extrabold text-center text-blue-500 mt-4 mb-8">{title}</h1>
      <div className="w-1/2 space-y-8 border-l-4 pl-12 border-slate-200" style={{ backgroundColor: 'white' }}>
        <Separator />
        <NotionRenderer blockMap={allPosts} />
      </div>
    </div>
  );
}
