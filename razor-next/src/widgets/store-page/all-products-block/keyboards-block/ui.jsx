import styles from './styles.module.scss'
import { LaptopsTitle } from './keyboards-title'
import { LaptopsSlider } from './keyboards-slider'

export function LaptopsBlock(){
    return(
        <section className={styles.laptops}>
            <div className={styles.container}>
                <LaptopsTitle></LaptopsTitle>
                <LaptopsSlider></LaptopsSlider>
            </div>
        </section>
    )
}