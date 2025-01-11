import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href="/news" >News page</Link>
    </div>
  );
}
