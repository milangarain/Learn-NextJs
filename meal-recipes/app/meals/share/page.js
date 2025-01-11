'use client';

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
export default function Share() {
    // const saveMeal = (formData) => {
        
    //     shareMeal(formData);
    // }
    return (
        <>
            <header className={classes.header}>
                <h1>Share your <span className={classes.hightlight}>favorite meal</span></h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={shareMeal}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name" >your Name</label>
                            <input id="name" type="text" name="name"/>
                        </p>
                        <p>
                            <label htmlFor="email" >your Email</label>
                            <input id="email"  type="text" name="email"/>
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">title</label>
                        <input id="title" name="title"  type="text"/>
                    </p>
                    <p>
                        <label htmlFor="summary">short Summary</label>
                        <input id="summary"  type="text" name="summary"/>
                    </p>
                    <p>
                        <label htmlFor="instructions">instructions</label>
                        <textarea id="instructions"  type="text" name="instructions"/>
                    </p>
                    <ImagePicker name="image" />
                    <p className={classes.actions}>
                        <button type="submit">Share Meal</button>
                    </p>
                </form>
                   
            </main>
        </>
    )
}