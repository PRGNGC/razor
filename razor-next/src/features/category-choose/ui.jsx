'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function CategoryChoose(){
    const params = useParams();

    return(
        <ul className={styles.categories}>

            <Link href='/store/laptops'>
                <li className={params.slug == 'laptops' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'laptops' ? styles.selectedCategoryName : styles.categoryName}>Laptops</p>
                    <Link href='/store'  >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'laptops' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/keyboards'>
                <li className={params.slug == 'keyboards' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'keyboards' ? styles.selectedCategoryName : styles.categoryName}>Keyboards</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'keyboards' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/mice'>
                <li className={params.slug == 'mice' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'mice' ? styles.selectedCategoryName : styles.categoryName}>Mice</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'mice' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/audio'>
                <li className={params.slug == 'audio' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'audio' ? styles.selectedCategoryName : styles.categoryName}>Audio</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'audio' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/components'>
                <li className={params.slug == 'components' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'components' ? styles.selectedCategoryName : styles.categoryName}>Components</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'components' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/chairs'>
                <li className={params.slug == 'chairs' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'chairs' ? styles.selectedCategoryName : styles.categoryName}>Chairs</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'chairs' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/streaming'>
                <li className={params.slug == 'streaming' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'streaming' ? styles.selectedCategoryName : styles.categoryName}>Streaming</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'streaming' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/console'>
                <li className={params.slug == 'console' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'console' ? styles.selectedCategoryName : styles.categoryName}>Console</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'console' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/mobile'>
                <li className={params.slug == 'mobile' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'mobile' ? styles.selectedCategoryName : styles.categoryName}>Mobile</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'mobile' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>

            <Link href='/store/gear'>
                <li className={params.slug == 'gear' ? styles.selectedCategory : styles.category}> 
                    <p className={params.slug == 'gear' ? styles.selectedCategoryName : styles.categoryName}>Gear</p>
                    <Link href='/store' >
                        <Image 
                            src='/icons/close-cross.svg' 
                            width={24} 
                            height={24} 
                            className={params.slug == 'gear' ? styles.selectedCross : styles.cross} 
                            alt='cross'
                        />
                    </Link>
                </li>
            </Link>





















{/* 
            <li className={currentCategory == 'laptops' ? styles.selectedCategory : styles.category}> 
                <p className={currentCategory == 'laptops' ? styles.selectedCategoryName : styles.categoryName}>Laptops</p>
                <input type="radio" id='laptops' name="myRadio" value='laptops' onClick={() => {setCurrentCategory("laptops")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            setCurrentCategory('')
                            document.querySelector("#laptops").checked = false;
                        }
                    } 
                    height={24} 
                    className={currentCategory == 'laptops' ? styles.selectedCross : styles.cross} 
                    alt='cross'
                />
            </li>
            <li className={currentCategory == 'keyboards' ? styles.selectedCategory : styles.category}> 
                <p className={currentCategory == 'keyboards' ? styles.selectedCategoryName : styles.categoryName}>Keyboards</p>
                <input type="radio" id='keyboards' name="myRadio" value='keyboards' onClick={() => {setCurrentCategory("keyboards")}}/>
                <Image 
                    src='/icons/close-cross.svg' 
                    width={24} 
                    onClick={
                        () => {
                            // setCategory('')
                            setCurrentCategory('')
                            document.querySelector("#keyboards").checked = false;
                        }
                    } 
                    height={24} 
                    // className={category == 'keyboards' ? styles.selectedCross : styles.cross} 
                    className={currentCategory == 'keyboards' ? styles.selectedCross : styles.cross} 
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
            </li> */}
        </ul>
    );
}