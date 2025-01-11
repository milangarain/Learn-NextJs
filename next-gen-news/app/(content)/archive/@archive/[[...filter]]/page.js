import NavLink from "@/components/header/nav-link";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import classes from "./page.module.css";
import NewsList from "@/components/news/news-list";
// import Error from "next/error";

export default function ArchivePage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let links = getAvailableNewsYears();
  let newsList = [];
  if (selectedYear) {
    links = getAvailableNewsMonths(selectedYear);
    newsList = getNewsForYear(selectedYear);
  } 
  if(selectedMonth) {
    links = [];
    newsList = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  if ((selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) ) {
    console.log(selectedMonth,selectedYear,getAvailableNewsMonths(selectedYear),(getAvailableNewsMonths(selectedYear)).includes(selectedMonth))
    throw new Error("invalid filter!!!")
  }
  console.log(links);
  
  return (
    <div>
      <nav>
        <ul className={classes.links}>
          {links.map((link) => {
            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
            console.log(href);
            return <NavLink key={link} href={href} label={link} />;
          })}
        </ul>
      </nav>
      {newsList.length !== 0 && <NewsList heading={null} newsList={newsList} />}
      {newsList.length === 0 && <p>No news found for the selected period.!</p>}
    </div>
  );
}
