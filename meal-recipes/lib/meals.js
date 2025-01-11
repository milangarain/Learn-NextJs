// 'use server'

import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

//   throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    
    meal.slug = slugify(meal.title, {lower: true});
    meal.instuction = xss(meal.instuction);
    console.log(meal);
    const extainsion = meal.image.name.split(".").pop();
    const fileLoc = `/images/savedMeals/${meal.slug}.${extainsion}`;
    const stream = fs.createWriteStream(`public\\${fileLoc}`)
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error)=> {
        if(error) {
            throw new Error('Saving image failed');
        }
    });
    meal.image = fileLoc;
    db.prepare(`
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
        VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `).run(meal);
}