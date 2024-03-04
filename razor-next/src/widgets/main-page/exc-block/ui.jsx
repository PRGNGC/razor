import './styles.scss'
import { ExcTitle } from './exc-title'
import { ExcSlider } from './exc-slider'

export function ExcBlock(){
    return(
        <section className='exclusives'>
            <div className="container">
                <ExcTitle></ExcTitle>
                <ExcSlider></ExcSlider>
            </div>
        </section>
    )
}