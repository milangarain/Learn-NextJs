// "use client"

// import NewsItem from "@/components/news/news-item";
import { getAllNews } from "@/lib/news";
// import classes from './page.module.css';
import NewsList from "@/components/news/news-list";
// import { useState, useEffect } from "react";


export default async function AllNews() {

  // const allNews = getAllNews();
  // const [isFetching, setIsFetching] = useState(true);
  // const [error, setError] = useState(false);
  // const [allNews, setAllNews] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsFetching(true);
  //     const response = await fetch('http://localhost:8080/news');
  //     if (!response.ok) {
  //       setError("Failed to load API response");
  //       setIsFetching(false);
  //       return;
  //     }
  //     const data = await response.json();
  //     setAllNews(data);
  //     setIsFetching(false);    
  //   }
  //   fetchData();
  // }, [])

   const allNews = await getAllNews();

  return (
    <>
      <NewsList heading="News page" newsList={allNews} />
    </>
    
  );
}
