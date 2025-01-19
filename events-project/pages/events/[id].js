import { useRouter } from "next/router"

export default function EventDetailsPage() {
	const router = useRouter();
	console.log(router, router.pathname, router.query)
	return (
		<div>
			<h1> Event details page {router.query.id}</h1>
		</div>
	)
}