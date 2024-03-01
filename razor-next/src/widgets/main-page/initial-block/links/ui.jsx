import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import YoutubeIcon from '@/shared/ui/icon/assets/youtube.svg'
import FacebookIcon from '@/shared/ui/icon/assets/facebook.svg'
import TwitterIcon from '@/shared/ui/icon/assets/twitter.svg'
import InstagramIcon from '@/shared/ui/icon/assets/instagram.svg'

export function Links(){
    return(
        <div className={styles.mainScreenSocialLinks}>
            <p className={styles.socialLinksWatchword}>FOR GAMERS. BY GAMERS.™</p>
            <div className={styles.socialLinks}>
                <Link href='/'> 
                    <Image src={YoutubeIcon} alt='YoutubeIcon' />
                </Link>
                <Link href='/'>
                    <Image src={FacebookIcon} alt='FacebookIcon'/>
                </Link>
                <Link href='/'>
                    <Image src={InstagramIcon} alt='InstagramIcon' />
                </Link>
                <Link href='/'>
                    <Image src={TwitterIcon} alt='TwitterIcon' />
                </Link>
            </div>
        </div>
    )
}