import { useRouter } from "next/router";
import EventList from "../../../components/events/event-list";
import { getEvents } from "../../../data/dummy-data";
import Link from "next/link";

export default function filteredEvents({query}) {
	const router = useRouter();
		//console.log(router, router.pathname, router.query);
	const filter = router.query.filter;
	const month = filter && filter[1];
	const year = filter?.[0];
	console.log(filter);
	let events = [];
	if( filter) {
		events = getEvents(month,year);
	}
	return (
		<div className="filtered-events">
			<div>
				<h1>Events in {month}/{year}</h1>
				<Link type="button" className="clear" href="/events" >Clear Filter</Link>
			</div>
			<EventList eventList={events} />
		</div>
	)
}