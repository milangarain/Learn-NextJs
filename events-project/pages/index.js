import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <h1>Home page!</h1>
      <Link href="/events">All Events</Link>
    </div>
  );
}
