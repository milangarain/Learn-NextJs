import NavLink from "@/components/header/nav-link";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import classes from "./page.module.css";
import NewsList from "@/components/news/news-list";
import { Suspense } from "react";
// import Error from "next/error";

const Links = async ({selectedYear, selectedMonth})=> {
  console.log(selectedYear, selectedMonth);
  let links = await getAvailableNewsYears();
  if (selectedYear) {
    links = await getAvailableNewsMonths(selectedYear);
  } 
  if(selectedMonth) {
    links = [];
  }
  if ((selectedYear && !(await getAvailableNewsYears()).includes(selectedYear)) ||
    (selectedMonth && !(await getAvailableNewsMonths(selectedYear)).includes(selectedMonth)) ) {
    // console.log(selectedMonth,selectedYear,getAvailableNewsMonths(selectedYear),(getAvailableNewsMonths(selectedYear)).includes(selectedMonth))
    throw new Error("invalid filter!!!")
  }
  console.log(links);

  return (
    <nav>
        <ul className={classes.links}>
          {links.map((link) => {
            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
            console.log(href);
            return <NavLink key={link} href={href} label={link} />;
          })}
        </ul>
      </nav>
  )
}

const News = async ({selectedYear, selectedMonth}) => {
  console.log(selectedYear, selectedMonth);
  //let links = await getAvailableNewsYears();
  let newsList = [];
  if (selectedYear) {
    //links = await getAvailableNewsMonths(selectedYear);
    newsList =await  getNewsForYear(selectedYear);
  } 
  if(selectedMonth) {
    //links = [];
    newsList = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  if ((selectedYear && !(await getAvailableNewsYears()).includes(selectedYear)) ||
    (selectedMonth && !(await getAvailableNewsMonths(selectedYear)).includes(selectedMonth)) ) {
    // console.log(selectedMonth,selectedYear,getAvailableNewsMonths(selectedYear),(getAvailableNewsMonths(selectedYear)).includes(selectedMonth))
    console.log("Error>>>>>>>")
    throw new Error("invalid filter!!!")
  }
  // console.log(links);

  return (
    <>
      {newsList.length !== 0 && <NewsList heading={null} newsList={newsList} />}
      {newsList.length === 0 && <p>No news found for the selected period.!</p>}
    </>
  )
}

export default async function ArchivePage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  
  
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Links selectedYear={selectedYear} selectedMonth={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <News selectedYear={selectedYear} selectedMonth={selectedMonth} />
      </Suspense>
    </div>
  );
}
