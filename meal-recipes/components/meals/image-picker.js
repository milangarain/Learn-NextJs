'use client';

import Image from 'next/image';
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
export default function ImagePicker({name}) {
    const [pickedImage, setPickedImage] = useState(null);
    const inputRef = useRef();
    const inputChageHandler = (event) => {
        const file = event.target.files[0];
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=> {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);
    }
    const pickImageBtn = () => {
        console.log("btn clicked");
        inputRef.current.click();
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>Your Image</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage && <Image src={pickedImage} alt="previewed image" fill/>}
                    {!pickedImage && <p> pick an Image</p>}
                </div>
                {/* <input
                    name={name}
                    id={name}
                    type="file" 
                    accept="image/png, image/jpeg" 
                    className={classes.input}
                    ref={inputRef}
                    onChange={inputChageHandler}
                /> */}
                 <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                    onChange={inputChageHandler}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={pickImageBtn}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}