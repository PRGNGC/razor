'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { SliderTemplate } from "@/features/news-block/slider";
import styles from './styles.module.scss'
import Link from "next/link";
import { getNews } from "../api";

export function NewsSlider(){
    const [news, setNews] = useState([]);
 
    async function FetchData(){
        const response = await getNews();
        setNews(response)
    }
    
    FetchData()

    const maxCapacity = 4;
    let pagesCount = new Array(Math.ceil(news.reduce((sum, current) => sum + current.size, 0) / maxCapacity)).fill(1);
    let currentLoading = 0;
    let nextNew = 0;

    return(
        <section className={styles.newsBlock}>
            <div className={styles.container}>
                <div className={styles.newsBlockContent}>
                    <div className={styles.smallSlider}>
                        {
                            news.map(i => {
                                return(
                                    <div key={crypto.randomUUID()} className={styles.newCard} style={{backgroundImage: 'url(' + i.img + ')'}}>
                                        <Link href='/' className={styles.cardLink} />
                                        <div className={styles.newType}>{i.type}</div>
                                        <h1 className={styles.newTitle}>{i.title}</h1>
                                        <p className={styles.newText}>{i.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <SliderTemplate personalSettings={{        
                                rows: 2,
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                responsive: [
                                    {
                                      breakpoint: 769,
                                      settings: {
                                        arrows: false,
                                        dots: false, 
                                      },
                                    },
                                    {
                                      breakpoint: 768,
                                      settings: "unslick"
                                    },
                                  ]
                        }}>
                            {
                                pagesCount.map(i => {
                                    currentLoading = 0;
                                    return(
                                    <div key={crypto.randomUUID()} className={styles.newsSlider}>   
                                        {news.map((i, index) => {
                                            if(maxCapacity <= currentLoading) return;
                                            if(index >= nextNew){
                                                if(currentLoading + i.size > maxCapacity) return;
                                                currentLoading += i.size;
                                                nextNew = index+1;
                                                return(
                                                    <div key={crypto.randomUUID()} className={styles.newCard} style={{backgroundImage: 'url(' + i.img + ')', maxWidth: i.size == 2 ? 707 + 'px' : 320 + 'px'}}>
                                                        <Link href='/' className={styles.cardLink} />
                                                        <div className={styles.newType}>{i.type}</div>
                                                        <h1 className={styles.newTitle}>{i.title}</h1>
                                                        <p className={styles.newText}>{i.text}</p>
                                                    </div>
                                                )
                                            }
                                        }
                                        )}  
                                    </div>)
                                })
                            }
                        </SliderTemplate>
                </div>
            </div>
        </section>
    )
}
    // axios.get('http://localhost:8000/news')
    // .then(resp => {
    //     let data = resp.data;
    //     data.forEach(e => {
    //         console.log(`${e.title}, ${e.text}, ${e.type}`);
    //     });
    // })
    // .catch(error => {
    //     console.log(error);
    // })