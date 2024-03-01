import { Header } from "@/widgets/header"
import { InitialBlock } from "@/widgets/main-page/initial-block" 
import { NewsBlock } from "@/widgets/main-page/news-block" 

export function MainPage(){
    return(
        <>
            <Header></Header>
            <InitialBlock></InitialBlock>
            <NewsBlock></NewsBlock>
        </>
    )
}