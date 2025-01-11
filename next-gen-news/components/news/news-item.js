import Image from "next/image";
import Link from "next/link";
import classes from './news-item.module.css';

export default function NewsItem({news}) {
	return (
		<li className={classes.news}>
			<Link href={`/news/${news.slug}`}>
				<Image src={`/images/news/${news.image}`} width={300} height={200} alt={news.title} />
				<span style={{textAlign: "center"}}>{news.title}</span>
			</Link>
		</li>
	)
}