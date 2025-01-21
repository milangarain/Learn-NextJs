import EventItem from "./event-item";

export default function EventList({ eventList }) {
  return (
    <div className="event-list">
      {eventList.map((event) => {
        return <EventItem key={event.id} event={event} />
      })}
    </div>
  );
}
