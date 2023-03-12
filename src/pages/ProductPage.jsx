import { useRef } from 'react';
import style from './productPage.module.css';
import ImageCellContainer from '../components/ImageCellContainer';

//assets import
import IMG1 from '../assets/IMG-20221218-WA0007.jpg';
import IMG2 from '../assets/IMG-20221218-WA0008.jpg';
import IMG3 from '../assets/IMG-20221218-WA0009.jpg';
import IMG4 from '../assets/IMG-20221218-WA0010.jpg';
import IMG5 from '../assets/IMG-20221218-WA0011.jpg';
import IMG6 from '../assets/IMG-20221218-WA0012.jpg';
import IMG7 from '../assets/IMG-20221218-WA0013.jpg';
import IMG8 from '../assets/IMG-20221218-WA0014.jpg';
import IMG9 from '../assets/IMG-20221218-WA0015.jpg';
import IMG10 from '../assets/IMG-20221218-WA0017.jpg';
import IMG11 from '../assets/IMG-20221218-WA0018.jpg';
import IMG12 from '../assets/IMG-20221218-WA0019.jpg';
import IMG13 from '../assets/IMG-20221218-WA0022.jpg';
import IMG14 from '../assets/IMG-20221218-WA0024.jpg';
import IMG15 from '../assets/IMG-20221218-WA0025.jpg';
import IMG16 from '../assets/IMG-20221218-WA0026.jpg';
import IMG17 from '../assets/IMG-20221218-WA0027.jpg';
import IMG18 from '../assets/IMG-20221218-WA0028.jpg';
import IMG19 from '../assets/IMG-20221218-WA0029.jpg';
import IMG20 from '../assets/IMG-20221218-WA0030.jpg';

import settingLogo from '../assets/setting-5.png';


const ProductPage = (props) =>{
    const cards = useRef(
        [{url: IMG1}, {url: IMG2}, {url: IMG3}, {url: IMG4}, {url: IMG5}, {url: IMG6}, {url: IMG7}, {url: IMG8}, {url: IMG9}, {url: IMG10}, {url: IMG11}, {url: IMG12}, {url: IMG13}, {url: IMG14}, {url: IMG15}, {url: IMG16}, {url: IMG17}, {url: IMG18}, {url: IMG19}, {url: IMG20}]
    )
    return (
        <div className={`${style.productPage} inline-padding`}>
            <div className={style.productCategory}>
                <p>Resturant</p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>Fantasy city</p>
                <p>beach</p>
                <p>cabins</p>
                <p>off-grid</p>
                <p>farms</p>
                <p>location <span><img src={settingLogo} alt="" /></span></p>
            </div>
            <ImageCellContainer cardsArray={cards.current}></ImageCellContainer>
        </div>
    )
};

export default ProductPage;