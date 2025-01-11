'use client';
import { getSelectedNews } from "@/lib/news";
import { useRouter } from "next/navigation";
// import Image from "next/image";

export default function FullImage({ params }) {
//   console.log(params);
  const news = getSelectedNews(params.slug);
//   console.log(news);
  if (!news) {
	notFound();
  }
  const router = useRouter();
  return (
  	<>
  		<div className="modal-backdrop" onClick={router.back}></div>
  		<dialog className="modal" open>
  			<div className="fullscreen-image">
  				<img src={`/images/news/${news.image}`} alt={news.title} />
  			</div>
  		</dialog>
  	</>
  )

//   if (!news) {
// 	notFound();
//   }

//   return (
// 	<div className="fullscreen-image">
// 	  <img src={`/images/news/${news.image}`} alt={news.title} />
// 	</div>
//   );
}
