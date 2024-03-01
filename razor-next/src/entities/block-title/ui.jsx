import styles from './styles.module.scss'

export function BlockTitle({header, text, children}){
    return(
        <div className={styles.blockHeader}>
            <div className={styles.blockHeaderText}>
                <h1 className={styles.blockHeaderTitle}>{header}</h1>
                <hr className={styles.divider} />
                <p className={styles.blockHeaderSubheader}>{text}</p>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </div>
    )
}