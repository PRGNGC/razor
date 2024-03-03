import { Header } from "@/widgets/header"
import { InitialBlock } from "@/widgets/main-page/initial-block" 
import { NewsBlock } from "@/widgets/main-page/news-block" 
import { AdvBlock } from "@/widgets/main-page/adv-block"

export function MainPage(){
    return(
        <>
            <Header></Header>
            <InitialBlock></InitialBlock>
            <NewsBlock></NewsBlock>
            <AdvBlock></AdvBlock>
        </>
    )
}