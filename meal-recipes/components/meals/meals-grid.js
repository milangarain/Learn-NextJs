import { getMeals } from "@/lib/meals";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export default async function MealsGrid() {
    const meals = await getMeals();
    console.log(meals);
    return (
        <>
            {/* <p>Meals list</p> */}
            <ul className={classes.meals}>
                {meals.map((meal) => {
                    return <MealItem key ={meal.id} {...meal}/>
                })}
            </ul>
        </>
        
    )
}