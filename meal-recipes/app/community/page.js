import Image from 'next/image';
import MealImg from '@/assets/icons/meal.png';
import CommunityImg from '@/assets/icons/community.png';
import EventImg from '@/assets/icons/events.png';
import classes from './page.module.css';
export default function Community() {
    return (
        <>
           <header className={classes.header}>
                <h1>One shared passion: <span className={classes.highlight}> Food</span></h1>
                <p>Join our community and share your favorite recipes!</p>
            </header>
            <main className={classes.main}>
                <h2>Community Perks</h2>
                <ul className={classes.perks}>
                    <li>
                       <Image src={MealImg} alt="image"/>
                       <p>Share & discover receipes</p> 
                    </li>
                    <li>
                        <Image src={CommunityImg} alt="image2"/>
                        <p>Find new friends & like mined people</p>
                    </li>
                    <li>
                        <Image src={EventImg} alt="image3"/>
                        <p>Perticipate in exclusive events</p>
                    </li>
                </ul>

            </main>
        </>
    )
}