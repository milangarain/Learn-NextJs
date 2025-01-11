import classes from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
export default function MealDetails({params}) {
    // console.log(params,meals[params.slug-1])
    const meal =getMeal(params.slug);
    if (!meal) {
        return notFound();
    }
    return (
        <>
            <div className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt="food image" fill />    
                </div>
                
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>by <Link href={`mailto:${meal.creator}`}>{meal.creator}</Link> </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </div>
            <div className={classes.instructions}>
                {meal.instruction}
            </div>
        </>
    )
}