import EventFilter from "../../components/events/event-filter"
import EventList from "../../components/events/event-list"
import { getAllEvents } from "../../data/dummy-data"
export default function AllEvents() {
	const allEvents = getAllEvents();
	return (
		<div className="all-events">
			<h1>All Events page</h1>
			<EventFilter />
			<EventList eventList={allEvents} />
		</div>
	)
}