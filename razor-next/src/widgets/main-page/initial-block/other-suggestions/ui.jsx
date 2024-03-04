import styles from './styles.module.scss'
import Link from 'next/link'
import i1 from '@/shared/ui/images/another-product-1.png'
import i2 from '@/shared/ui/images/another-product-2.png'
import i3 from '@/shared/ui/images/another-product-3.png'

export function OtherSuggestions(){
    return(
        <div className={styles.otherProducts}>
                <div className={`${styles.otherProduct}`} style={{backgroundImage: `url(${i1.src})`}}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZER <br/>ENKI PRO</p>
                </div>
                <div className={`${styles.otherProduct}`} style={{backgroundImage: `url(${i2.src})`}}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZER <br/>BLADE 14</p>
                </div>
                <div className={`${styles.otherProduct}`} style={{backgroundImage: `url(${i3.src})`}}>
                    <Link href='/' />
                    <p className={styles.otherProductName}>RAZERCON <br/>2022</p>
                </div>
        </div>
    )
}