import styles from './styles.module.scss'
import { ChairsTitle } from "./chairs-title/ui"
import { ChairsSlider } from './chairs-slider'

export function ChairsBlock(){
    return(
        <section className={styles.laptops}>
            <div className={styles.container}>
                <ChairsTitle />
                <ChairsSlider />
            </div>
        </section>
    )
}