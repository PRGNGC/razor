'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export function CategoryChoose({curCategory, setCurrentCategory}){
    const [category, setCategory] = useState('');

    return(
        <ul className={styles.categories}>
            {/* <li className={category == 'laptops' ? styles.selectedCategory : styles.category}>  */}
            <li className={curCategory == 'laptops' ? styles.selectedCategory : styles.category}> 
                <p className={curCategory == 'laptops' ? styles.selectedCategoryName : styles.categoryName}>Laptops</p>
                {/* <p className={category == 'laptops' ? styles.selectedCategoryName : styles.categoryName}>Laptops</p> */}
                {/* <input type="radio" id='laptops' name="myRadio" value='laptops' onClick={() => {setCategory("laptops")}}/> */}
                <input type="radio" id='laptops' name="myRadio" value='laptops' onClick={() => {setCurrentCategory("laptops")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCurrentCategory('')
                            // setCategory('')
                            document.querySelector("#laptops").checked = false;
                        }
                    } 
                    height={24} 
                    className={curCategory == 'laptops' ? styles.selectedCross : styles.cross} 
                    // className={category == 'laptops' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'keyboards' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'keyboards' ? styles.selectedCategoryName : styles.categoryName}>Keyboards</p>
                <input type="radio" id='keyboards' name="myRadio" value='keyboards' onClick={() => {setCategory("keyboards")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#keyboards").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'keyboards' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'mice' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'mice' ? styles.selectedCategoryName : styles.categoryName}>Mice</p>
                <input type="radio" id='mice' name="myRadio" value='mice' onClick={() => {setCategory("mice")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#mice").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'mice' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'audio' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'audio' ? styles.selectedCategoryName : styles.categoryName}>Audio</p>
                <input type="radio" id='audio' name="myRadio" value='audio' onClick={() => {setCategory("audio")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#audio").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'audio' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'components' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'components' ? styles.selectedCategoryName : styles.categoryName}>Components</p>
                <input type="radio" id='components' name="myRadio" value='components' onClick={() => {setCategory("components")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#components").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'components' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'chairs' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'chairs' ? styles.selectedCategoryName : styles.categoryName}>Chairs</p>
                <input type="radio" id='chairs' name="myRadio" value='chairs' onClick={() => {setCategory("chairs")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#chairs").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'chairs' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'streaming' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'streaming' ? styles.selectedCategoryName : styles.categoryName}>Streaming</p>
                <input type="radio" id='streaming' name="myRadio" value='streaming' onClick={() => {setCategory("streaming")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#streaming").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'streaming' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'console' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'console' ? styles.selectedCategoryName : styles.categoryName}>Console</p>
                <input type="radio" id='console' name="myRadio" value='console' onClick={() => {setCategory("console")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#console").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'console' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'mobile' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'mobile' ? styles.selectedCategoryName : styles.categoryName}>Mobile</p>
                <input type="radio" id='mobile' name="myRadio" value='mobile' onClick={() => {setCategory("mobile")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#mobile").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'mobile' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={category == 'gear' ? styles.selectedCategory : styles.category}> 
                <p className={category == 'gear' ? styles.selectedCategoryName : styles.categoryName}>Gear</p>
                <input type="radio" id='gear' name="myRadio" value='gear' onClick={() => {setCategory("gear")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCategory('')
                            document.querySelector("#gear").checked = false;
                        }
                    } 
                    height={24} 
                    className={category == 'gear' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
        </ul>
    );
}