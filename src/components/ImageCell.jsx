import style from './imageCellContainer.module.css';
import starReview from '../assets/star-review.png';
const imageCell = (props) =>{

    return (
        <div className={style.imageCell}>
                <img src={props.url} alt="" />
                <p>
                    <span>Desert king</span>
                    <span>MIBT per night</span>
                </p>
                <p>
                    <span>2345km away</span>
                    <span>available for 2 weeks stay</span>
                </p>
                <div><img src={starReview} alt="five star review" /></div>
            </div>
    )
}
export default imageCell;