import { NotionRenderer } from "react-notion";
import { Separator } from "@/components/ui/separator";
import { ProjectDataType, getProjectPageIds } from "@/lib/notion/projects";

export async function generateStaticParams() {
  const projects = await getProjectPageIds();

  return projects.map((project: any) => ({
    slug: project.pageId,
  }));
}

export const getBlockMap = async (NOTION_BLOG_ID: string) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const blockMap = await getBlockMap(params.slug);

  const title = (Object.values(blockMap) as any)[0].value.properties
    .title[0][0];

  return (
    <div className="flex justify-center pt-12">
      <div className="w-1/2 space-y-8 border-l-4 pl-12 border-slate-200">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Separator />
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  );
}
