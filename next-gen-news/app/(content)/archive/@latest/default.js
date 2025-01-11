import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

const latestNews = getLatestNews();

export default function LatestNewsPage() {

	return (
		<NewsList heading="Latest news" newsList={latestNews} />
	)
}