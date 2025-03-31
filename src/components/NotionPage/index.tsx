import { ExtendedRecordMap } from 'notion-types';
import BlockContainer from '@/components/BlockContainer';
import EventDetails, { EventDetailsDataType } from './EventDetails';
import NotionRendererClient from './NotionRendererClient';

type PropsType = {
  recordMap: ExtendedRecordMap;
  title: string;
  eventDetails?: EventDetailsDataType;
};

export default function NotionPage({ recordMap, title, eventDetails }: PropsType) {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 py-12">
      <h1 className="mb-10 text-center text-5xl font-bold text-blueprint">{title}</h1>
      <div className="w-full md:w-auto">
        <BlockContainer roundedCorners centered>
          {eventDetails && <EventDetails data={eventDetails} />}
          <NotionRendererClient recordMap={recordMap} />
        </BlockContainer>
      </div>
    </div>
  );
}
