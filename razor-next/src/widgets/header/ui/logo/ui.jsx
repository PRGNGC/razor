'use client'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import razorLabel from '@/shared/ui/icon/assets/razor-label.svg'
import { useSelector, useDispatch } from 'react-redux'
import { menuToggle } from '@/features/store/menu/menuSlice'

export function CorpLogo(){
    const menu = useSelector((state) => state.menuReducer.value);
    const dispatch = useDispatch();

    return(
        <Link href='/'>
            <Image
                onClick={() => { if(menu == true) dispatch(menuToggle()) }}
                src={razorLabel}
                alt='razor-label'
            />
        </Link>
        
    )
}