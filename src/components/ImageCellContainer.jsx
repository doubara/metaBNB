import style from './imageCellContainer.module.css';
import IMG1 from '../assets/IMG-20221218-WA0007.jpg';
import IMG2 from '../assets/IMG-20221218-WA0008.jpg';
import IMG3 from '../assets/IMG-20221218-WA0009.jpg';
import IMG4 from '../assets/IMG-20221218-WA0010.jpg';

import ImageCell from './ImageCell';

const ImageCellContainer = (props) =>{
    console.log(props.cardsArray);
    return (
        <div className={`${style.imageCells} inline-padding`}>
            {props.cardsArray.map(card=>{
                return <ImageCell url={card.url} key={Math.random()*23457 + +Math.random()*89943}></ImageCell>
            })}
        </div>
    )
}

export default ImageCellContainer;