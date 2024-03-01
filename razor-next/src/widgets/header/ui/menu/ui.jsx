'use client'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { SearchField } from '@/features/header/search-field/ui'
import shoppingCart from '@/shared/ui/icon/assets/shopping-cart.svg'
import PcIcon from '@/shared/ui/icon/assets/Monitor.svg'
import JoystickIcon from '@/shared/ui/icon/assets/Games.svg'
import MobileIcon from '@/shared/ui/icon/assets/Mobile.svg'
import HeartIcon from '@/shared/ui/icon/assets/Heart.svg'
import CategoryIcon from '@/shared/ui/icon/assets/Category.svg'
import CommunityIcon from '@/shared/ui/icon/assets/Friends.svg'
import SupportIcon from '@/shared/ui/icon/assets/lifebouy.svg'
import BagIcon from '@/shared/ui/icon/assets/bag.svg'
import razorLabel from '@/shared/ui/icon/assets/razor-label.svg'
import { useDispatch, useSelector } from 'react-redux'
import { menuToggle } from '@/features/store/menu/menuSlice'

export function MenuBurger({clickHandler}){
    const menu = useSelector((state) => state.menuReducer.value);
    const dispatch = useDispatch();

    if(menu == true){
    return(
        <div className={styles.menuBurgerContainer}>
            <SearchField fieldType='menu'></SearchField>
            <nav className={styles.navigationBar}>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={PcIcon} alt='Pc Icon' />
                        <Link href="/">PC</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={JoystickIcon} alt='Console' />
                        <Link href="/">Console</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={MobileIcon} alt='Mobile'/>
                        <Link href="/">Mobile</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={HeartIcon} alt='Lifestyle'/>
                        <Link href="/">Lifestyle</Link>
                    </li>

                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={CategoryIcon} alt='Services'/>
                        <Link href="/">Services</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={CommunityIcon} alt='Community'/>
                        <Link href="/">Community</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={SupportIcon} alt='Support'/>
                        <Link href="/">Support</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => dispatch(menuToggle())} >
                        <Image src={BagIcon} alt='Store'/>
                        <Link href="/">Store</Link>
                    </li>
                </ul>
            </nav>
            <Image src={razorLabel} alt='razor-label' onClick={() => dispatch(menuToggle())} ></Image>
            <figcaption>Razer Inc.</figcaption>

            <Link href='/'>
                <Image src={shoppingCart} alt='shopping-cart' onClick={() => dispatch(menuToggle())} />
            </Link>
        </div>
    )
}
}
