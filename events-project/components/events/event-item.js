import Link from "next/link";
import { getFormattedDate } from "../../util/date-util";

export default function EventItem({ event }) {
  const location = event.location.split(",");
  const formattedDate = getFormattedDate(event.date);
  return (
    <li className="event-item">
      <div className="event-image">
        <img src={`/${event.image}`} alt={event.title} />
      </div>
      <div className="event-item-info">
        <h2>{event.title}</h2>
        <div className="event-date">{formattedDate}</div>
        <div className="event-location">
          <div className="icon"></div>
          <div>
            <div>{location[0]}</div>
            <div>{location[1]}</div>
          </div>
        </div>
        <div className="details-btn">
          <Link href={`/events/${event.id}`}>Expore Events </Link>
        </div>
      </div>
    </li>
  );
}
