import { Header } from "@/widgets/header"
import { InitialBlock } from "@/widgets/main-page/initial-block" 
import { NewsBlock } from "@/widgets/main-page/news-block" 
import { AdvBlock } from "@/widgets/main-page/adv-block"
import { ExcBlock } from "@/widgets/main-page/exc-block"
import { CategoriesBlock } from "@/widgets/main-page/categories-block"
import { LocationBlock } from "@/widgets/main-page/location-block"
import { Footer } from "@/widgets/footer"

export function MainPage(){
    return(
        <>
            <Header></Header>
            <InitialBlock></InitialBlock>
            <NewsBlock></NewsBlock>
            <AdvBlock></AdvBlock>
            <ExcBlock></ExcBlock>
            <CategoriesBlock></CategoriesBlock>
            <LocationBlock></LocationBlock>
            <Footer></Footer>
        </>
    )
}