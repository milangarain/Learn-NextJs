import NewsItem from "@/components/news/news-item";
// import { getAllNews } from "@/lib/news";
import classes from './news-list.module.css';
// const allNews = getAllNews();

export default function NewsList({heading, newsList}) {
  return (
    <div>
      <h1>{heading}</h1>
      <div>
        <ul className={classes.news}>
          {newsList.map((newsItem) => (
            <NewsItem key={newsItem.id} news={newsItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
