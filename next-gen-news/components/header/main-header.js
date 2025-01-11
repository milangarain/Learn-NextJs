import Link from "next/link";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <div className={classes.header}>
      <div className={classes.home}>
        <Link href="/" >NextNews</Link>
      </div>
      <nav>
        <ul>
            <NavLink href="/news" label="News" />
            <NavLink href="/archive" label="Archive" />
          
        </ul>
      </nav>
    </div>
  );
}
