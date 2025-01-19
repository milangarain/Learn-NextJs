import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">NextEvents</Link>
      <nav>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
