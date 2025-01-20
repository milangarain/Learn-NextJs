import { useRouter } from "next/router"
import { getEventDetails } from "../../data/dummy-data";
import { getFormattedDate } from "../../util/date-util";

export default function EventDetailsPage() {
	const router = useRouter();
	console.log(router, router.pathname, router.query);
	const eventId = router.query.id;
	const eventDetails = getEventDetails(eventId);

	console.log(eventDetails,eventId);
	if(!eventDetails) {
		return (
			<div>Event details not found!!</div>
		)
	}
	const location = eventDetails.location.split(",");
	const formattedDate = getFormattedDate(eventDetails.date);
	return (
		<div className="event-details">
			<div className="title">
				<h1> {eventDetails.title}</h1>
			</div>
			<div className="details">
				<div className="details-image">
					<img src={`/${eventDetails.image}`} alt={eventDetails.title} />
				</div>
				<div className="details-date-location">
					<div className="date">
						<div className="icon"></div>
						<div className="info">{formattedDate}</div>
					</div>
					<div className="location">
						<div className="icon"></div>
						<div className="info">{location[0]}</div>
						<div className="info">{location[1]}</div>
					</div>
				</div>
			</div>
			<div className="description">
				{eventDetails.description}
			</div>
		</div>
	)
}