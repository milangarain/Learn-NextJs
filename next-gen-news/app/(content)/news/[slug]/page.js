import { getSelectedNews } from "@/lib/news"
import Image from "next/image";
import Link from "next/link";

export default function NewsDetails({params}) {
	const news = getSelectedNews(params.slug);
	console.log(news);
	return (
		<div style={{marginTop: "2rem"}}>
			<Link href={`/news/${params.slug}/image`}>
				<Image alt={news.title} src={`/images/news/${news.image}`} width={100} height={100} />
			</Link>
			<h2>{news.title}</h2>
			<p>{news.date}</p>
			<p>{news.content}</p>
		</div>
	)
}