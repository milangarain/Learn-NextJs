import ModalBackdrop from "@/components/news/modal-backdrop";
import { getSelectedNews } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function FullImage({ params }) {
  const news = await getSelectedNews(params.slug);
  if (!news) {
	notFound();
  }
  return (
  	<>
		<ModalBackdrop />
  		<dialog className="modal" open>
  			<div className="fullscreen-image">
  				<img src={`/images/news/${news.image}`} alt={news.title} />
  			</div>
  		</dialog>
  	</>
  )
}
