// import NewsItem from "@/components/news/news-item";
import { getAllNews } from "@/lib/news";
import classes from './page.module.css';
import NewsList from "@/components/news/news-list";
const allNews = getAllNews();

export default function AllNews() {
  return (
    <NewsList heading="News page" newsList={allNews} />
  );
}
