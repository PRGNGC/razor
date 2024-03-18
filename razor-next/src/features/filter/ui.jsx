'use client'
import styles from './styles.module.scss'
import { getFilters, getAllCategoryProducts } from './api'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CategoryContext } from '@/pages/all-products/ui'
import { getProductsAmount } from './model/getProductsAmount'
import { useCallback } from 'react'

function formString(filter){
    let filterArr = filter.toLowerCase().split('')
    let deviders = [' ', '/', '-'];

    for(let i = 0; i <= filterArr.length; i++){
        if(deviders.includes(filterArr[i])) filterArr[i+1] = filterArr[i+1].toUpperCase()
        // if(filterArr[i] == " ") filterArr[i+1] = filterArr[i+1].toUpperCase()
    }
    // console.log(filterArr)
    
    let newStr = filterArr.join('')

        //    newStr.replace(" ", '');
   
    for(let i = 0; i <= deviders.length; i++){
        newStr = newStr.replace(deviders[i], '');
    }

    // console.log(newStr)
    // console.log(newStr.replace(" ", ''))

    return newStr
}

export function Filter({ filters,  filtersSetter }){

    const {currentCategory, setCurrentCategory} = useContext(CategoryContext);

    let cat = "keyboards"

    const {isLoading, isError, data, error} = useQuery({queryKey: ['filters', cat], queryFn: () => getFilters(cat)})
    
    // const {isPending, isErr, products, err} = useQuery({queryKey: ['prod', currentCategory], queryFn: () => getAllCategoryProducts(currentCategory)})

    if(isLoading){
        return <p>Loading...</p>
    }
    
    if(isError){
        return <p>{error.message}</p>
    }

    // if(isPending){
    //     return <p>Pending...</p>
    // }
    
    // if(isErr){
    //     return <p>{err.message}</p>
    // }


    return(
        <div className={styles.filtersBlock}>
            <div className={styles.appliedFiltersBlock}>
                <div className={styles.appliedFiltersHeader}>
                    <p className={styles.appliedFiltersTitle}>Applied Filters</p>
                    <p className={styles.appliedFiltersNullify}>Clear All</p>
                </div>
                {
                    filters.map(i => {
                        return(

                            <label key={crypto.randomUUID()} htmlFor={i.value} className={styles.filterCategoryOption}>
                                                    <input type="checkbox" id={i.value} />
                                                    {i.value}
                                                </label>
                        )
                    })
                }
            </div>

            <div className={styles.filters}>
                {
                    data[0]?.filt.map(j => 
                        {
                            return(
                                <div key={crypto.randomUUID()} className={styles.filterCategory}>
                                    <p className={styles.filterCategoryName}>{j.filterName}</p>
                                    {
                                        j.possibleValues.map(i => {
                                            return(
                                                <label key={crypto.randomUUID()} htmlFor={i} className={styles.filterCategoryOption}>
                                                    <input type="checkbox" id={i} 
                                                        // onClick={() => filtersSetter((prev) => [...prev, {filter: formString(j.filterName), value: i}])}
                                                        onClick={() => filtersSetter((prev) => [...prev, {filter: formString(j.filterName), value: i}])}
                                                    />
                                                    {i}
                                                    
                                                    {/* {console.log(formString(j.filterName))} */}
                                                    {/* {console.log( j.filterName.toLowerCase().replace(' ', '') )} */}
                                                    {/* {getProductsAmount(j.filterName, products)} */}
                                                    {/* {products?.reduce((currentSum, currentNumber) => {
                                                        if(currentNumber.a == i) currentSum++
                                                    }, 0)} */}
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