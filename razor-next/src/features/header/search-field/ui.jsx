import Image from 'next/image'
import SearchGlass from '@/shared/ui/icon/assets/search-glass.svg'
import styles from './styles.module.scss'

export function SearchField({fieldType = 'main'}){
    return(
        <label id='search-field' htmlFor={`searchField ` + fieldType} className={fieldType === 'main' ? `${styles.main} ${styles.searchFieldContent}` : styles.searchFieldContent}>
        {/* <label htmlFor={`searchField `} className={styles.searchFieldContent}> */}
            <Image
                src={SearchGlass}
                alt='search-glass'
            />
            <input type="search" id={`searchField ` + fieldType} placeholder='Search' className={styles.searchInput}/>
        </label>
    )
}