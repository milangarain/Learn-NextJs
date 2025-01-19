import Link from "next/link";

export default function EventItem({ event }) {
  const location = event.location.split(",");
  const date = new Date(event.date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate(); // Get the day (1-31)
  const month = months[date.getMonth()]; // Get the month name
  const year = date.getFullYear(); // Get the full year (e.g., 2025)

  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <li className="event-item">
      <div className="even-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-item-info">
        <h2>{event.title}</h2>
        <p className="event-date">{formattedDate}</p>
        <div className="event-location">
          <div className="icon"></div>
		  <i class="fa fa-map-marker"></i>
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
