
import Image from "next/image";
import classes from "./main-header.module.css";
import logo from "@/assets/logo.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";


export default function MainHeader() {
    // const path = usePathname();
    // console.log(path);
    return (
        <>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} height={50} width={50} alt="Image with food items"/>
                    <p>nextLevel Food</p>
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals' title='Browse Meals'/>
                            {/* <Link className={path.startsWith('/meals')? classes.active : undefined} href="/meals">Browse Meals</Link> */}
                        </li>
                        <li>
                            <NavLink href='/community' title='Foodies community' />
                            {/* <Link className={path.startsWith('/community')? classes.active : undefined} href="/community">Foodies Community</Link> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}