'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';
export default function NavLink({href, label}) {
	const path = usePathname();
	const activeClass = path.startsWith(href) ? classes.active : undefined;
	return (
		<li className={classes.link}>
			<Link href={href} className={activeClass}>{label}</Link>
		</li>
	)
}