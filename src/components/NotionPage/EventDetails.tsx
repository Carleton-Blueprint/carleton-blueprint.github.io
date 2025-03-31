import { EventDataType } from '@/lib/notion/events';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { MdOutlineUpcoming } from 'react-icons/md';

export type EventDetailsDataType = Pick<EventDataType, 'date' | 'venue' | 'status'>;

export default function EventDetails({ data }: { data: EventDetailsDataType }) {
  const { date, venue, status } = data;
  return (
    <div className="w-full md:px-[96px]">
      <div className="mb-10">
        <h1 className="mb-5 text-3xl font-semibold text-gray-800">Event Details</h1>
        <div className="grid grid-cols-2 items-center gap-2 md:w-[500px]">
          <p className="text-md flex items-center gap-1 text-gray-800">
            <BsCalendar3 /> Date
          </p>
          <p className="text-md text-gray-800">{date}</p>
          <p className="text-md flex items-center gap-1 text-gray-800">
            <MdOutlineLocationCity /> Venue
          </p>
          <p className="text-md text-gray-800">{venue}</p>
          <p className="text-md flex items-center gap-1 text-gray-800">
            <MdOutlineUpcoming /> Status
          </p>
          {status === 'Scheduled' ? (
            <span className="w-fit rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">Upcoming</span>
          ) : (
            <span className="w-fit rounded-full bg-gray-400 px-3 py-1 text-xs font-bold text-white">Passed</span>
          )}
        </div>
      </div>
    </div>
  );
}
