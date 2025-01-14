// 'use client';
import ModalBackdrop from "@/components/news/modal-backdrop";
import { getSelectedNews } from "@/lib/news";
import { notFound } from "next/navigation";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

export default async function FullImage({ params }) {
//   console.log(params);
  const news = await getSelectedNews(params.slug);
//   console.log(news);
  if (!news) {
	notFound();
  }
//   const router = useRouter();
  return (
  	<>
  		{/* <div className="modal-backdrop" onClick={router.back}></div> */}
		<ModalBackdrop />
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
