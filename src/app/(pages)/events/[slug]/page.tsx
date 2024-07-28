import { NotionRenderer } from "react-notion";
import { Separator } from "@/components/ui/separator";
import { EventDataType } from "@/lib/notion/events";
import getEventPageIds from "@/lib/notion/events";
import BlockContainer from "../../home/_components/BlockContainer";

export async function generateStaticParams() {
  const events = await getEventPageIds();

  return events.map((event: EventDataType) => ({
    slug: event.eventPageId,
  }));
}

const getBlockMap = async (NOTION_BLOG_ID: string) => {
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
  const blockMap = await getBlockMap(params.slug);
  const title = (Object.values(blockMap) as any)[0].value.properties
    .title[0][0];
  return (
    <div className="flex flex-col items-center justify-center pt-12 bg-blue-50">
      <BlockContainer title={title} roundedCorners inner centered margin>
        <div className="w-full max-w-3xl space-y-8 p-8 bg-white  rounded-lg">
          <NotionRenderer blockMap={blockMap} />
        </div>
      </BlockContainer>
    </div>
  );
}
