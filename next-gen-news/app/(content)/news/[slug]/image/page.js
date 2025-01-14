import { getSelectedNews } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function FullImage({ params }) {
  console.log(params);
  const news = await getSelectedNews(params.slug);
  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
