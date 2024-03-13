import styles from './styles.module.scss'
import { CategoryChoose } from '@/features/category-choose'

export function Categories({currentCategory, categoriesSetter}){
    return(
        <section className={styles.categoriesBlock}>
            <div className={styles.container}>
                <h1 className={styles.categoriesTitle}>Choose categories</h1>
                <CategoryChoose curCategory={currentCategory} setCurrentCategory={categoriesSetter} ></CategoryChoose>
            </div>
        </section>
    )
}