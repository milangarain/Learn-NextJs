// import { DUMMY_NEWS } from "./dummy-news";
import sql from 'better-sqlite3';
const db = sql('data.db');

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

export async function getAllNews() {
	// return DUMMY_NEWS;
	// const response = await fetch('http://localhost:8080/news');
	// await delay(5000);
	// if (!response.ok) {
	// 	throw new Error("failed to load data")
	// }
	// const data = await response.json();
	const news = db.prepare('SELECT * FROM news').all();
	await delay(2000);
	return news;
	// return data;
}

export async function getLatestNews() {
	// return DUMMY_NEWS.slice(0,3);
	const news = db.prepare('SELECT * FROM news ORDER by date LIMIT 3').all();
	await delay(2000);
	return news;
	
}

export async function getAvailableNewsYears() {
	// const years = [];
	// DUMMY_NEWS.forEach(news => {
	// 	const year = +news.date.slice(0,4);
	// 	if(!years.includes(year)) {
	// 		years.push(year);
	// 	}
	// });
	// return years.sort((a,b)=> b - a);

	const years = db.prepare(
		`SELECT DISTINCT strftime('%Y', date) as year FROM news `
	).all()
	.map(data => data.year);
	await delay(200);
	return years;
}

export async function getAvailableNewsMonths(year) {
	// return DUMMY_NEWS.reduce((months, news) => {
	//   const newsYear = new Date(news.date).getFullYear();
	//   if (newsYear === +year) {
	// 	const month = new Date(news.date).getMonth();
	// 	if (!months.includes(month)) {
	// 	  months.push(month + 1);
	// 	}
	//   }
	//   return months;
	// }, []).sort((a, b) => a - b);
	const months = db.prepare(
		`SELECT DISTINCT strftime('%m', date) as month from news WHERE strftime('%Y', date) = ?`
	).all(year)
	.map(data => data.month);
	await delay(2000);
	return months;
  }
  
  export async function getNewsForYear(year) {
	// return DUMMY_NEWS.filter(
	//   (news) => new Date(news.date).getFullYear() === +year
	// );
	const news = db.prepare(
		`SELECT * FROM news WHERE strftime('%Y', date) = ?`
	).all(year);
	await delay(2000);
	return news;
  }
  
  export async function getNewsForYearAndMonth(year, month) {
	// return DUMMY_NEWS.filter((news) => {
	//   const newsYear = new Date(news.date).getFullYear();
	//   const newsMonth = new Date(news.date).getMonth() + 1;
	//   return newsYear === +year && newsMonth === +month;
	// });
	const news = db.prepare(
		`SELECT * FROM news where strftime('%Y', date) = ? AND strftime('%m', date) = ?`
	).all(year, month);
	await delay(2000);
	return news;
  }

  export function getSelectedNews(slug) {
	// return DUMMY_NEWS.filter(news => news.slug === slug)[0];
	const news = db.prepare(
		`SELECT * FROM news WHERE slug = ?`
	).get(slug);
	return news;
  }