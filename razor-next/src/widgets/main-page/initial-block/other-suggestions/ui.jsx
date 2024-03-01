import styles from './styles.module.scss'
import Link from 'next/link'

export function OtherSuggestions(){
    return(
        <div className={styles.otherProducts}>
                <div className={`${styles.otherProduct} ${styles.firstOtherProduct}`}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZER <br/>ENKI PRO</p>
                </div>
                <div className={`${styles.otherProduct} ${styles.secondOtherProduct}`}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZER <br/>BLADE 14</p>
                </div>
                <div className={`${styles.otherProduct} ${styles.thirdOtherProduct}`}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZERCON <br/>2022</p>
                </div>
        </div>
    )
}