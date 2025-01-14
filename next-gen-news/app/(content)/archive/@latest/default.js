import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";



export default async function LatestNewsPage() {
	const latestNews = await getLatestNews();

	return (
		<NewsList heading="Latest news" newsList={latestNews} />
	)
}