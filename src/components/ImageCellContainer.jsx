import style from './imageCellContainer.module.css';
import IMG1 from '../assets/IMG-20221218-WA0007.jpg';
import IMG2 from '../assets/IMG-20221218-WA0008.jpg';
import IMG3 from '../assets/IMG-20221218-WA0009.jpg';
import IMG4 from '../assets/IMG-20221218-WA0010.jpg';

const ImageCellContainer = (props) =>{

    return (
        <div className={`${style.imageCells} inline-padding`}>
            {props.cardsArray.map(card=>{
                return <div className={style.imageCell}>
                <img src={card.url} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            })}
            {/* <div className={style.imageCell}>
                <img src={IMG1} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG2} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG3} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG4} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div> */}
            
            {/* <div className={style.imageCell}>
                <img src={IMG1} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG2} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG3} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div>
            <div className={style.imageCell}>
                <img src={IMG4} alt="" />
                <p>
                    <span>lorem</span>
                    <span>ipsum</span>
                </p>
                <p>
                    <span>dolor</span>
                    <span>sit amet</span>
                </p>
                <span>*****</span>
            </div> */}
        </div>
    )
}

export default ImageCellContainer;