'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';

export default function NavLink({title, href}) {
    const path = usePathname();
    return (

        <Link className={path.startsWith(href) ? classes.active : undefined} href={href}>{title}</Link>
    )
    
}