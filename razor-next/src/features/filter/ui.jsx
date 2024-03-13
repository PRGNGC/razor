'use client'
import styles from './styles.module.scss'
import { getFilters } from './api'
import { useQuery } from '@tanstack/react-query'

export function Filter({ filtersSetter }){

    let cat = "keyboards"

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['filters', cat],
        queryFn: () => getFilters(cat),
      })

    if(isLoading){
        return <p>Loading...</p>
    }
    
    if(isError){
        return <p>{error.message}</p>
    }


    return(
        <div className={styles.filtersBlock}>
            <div className={styles.appliedFiltersBlock}>
                <div className={styles.appliedFiltersHeader}>
                    <p className={styles.appliedFiltersTitle}>Applied Filters</p>
                    <p className={styles.appliedFiltersNullify}>Clear All</p>
                </div>
            </div>

            <div className={styles.filters}>
                {
                    data[0]?.filt.map(i => 
                        {
                            return(
                                <div className={styles.filterCategory}>
                                    <p className={styles.filterCategoryName}>{i.filterName}</p>
                                    {
                                        i.possibleValues.map(i => {
                                            return(
                                                <label onClick={filtersSetter(i)} htmlFor={i} className={styles.filterCategoryOption}>
                                                    <input type="checkbox" id={i}/>
                                                    {i}
                                                </label>
                                                )
                                            })
                                        }
                                </div>
                                
                            )
                        }
                    )
                }
            </div>

        </div>
    )
}