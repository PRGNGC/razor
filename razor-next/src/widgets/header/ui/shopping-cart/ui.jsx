import Image from 'next/image'
import Link from 'next/link'
import Cart from '@/shared/ui/icon/assets/shopping-cart.svg' 

export function ShoppingCart(){
    return(
        <Link href='/'>
            <Image 
                src={Cart}
                alt='shopping-cart'
            />
        </Link>
    )
}