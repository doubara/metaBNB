import style from './landingPage.module.css';

//image imports
import IMG1 from '../assets/IMG-20221218-WA0007.jpg';
import IMG2 from '../assets/IMG-20221218-WA0008.jpg';
import IMG3 from '../assets/IMG-20221218-WA0009.jpg';
import IMG4 from '../assets/IMG-20221218-WA0010.jpg';
import mbtoken from '../assets/mbtoken.png';
import metamask from '../assets/metamask.png';
import opensea from '../assets/opensea.png';


//component imports
import ImageCellContainer from '../components/ImageCellContainer';
const LandingPage = (props) =>{
    const cards = [{url: IMG1}, {url: IMG2}, {url: IMG3}, {url: IMG4}];
    return (
        <main>
            <section className={`${style.heroSection} inline-padding`}>
                <div className={style.heroArticle}>
                    <h1>Rent a <span className='emphasis'>Place</span> away from <span className='emphasis'>Home</span> in the <span className='emphasis'>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className={style.heroAction}>
                        <input type='text' 
                        placeholder='Search for location' />
                        <button className={style.heroButton}>Search</button>
                    </div>
                </div>
                <div className={style.imageLayout}>
                    <div className={style.imageGroup}>
                        <div className={style.imageContainer}>
                            <img src={IMG1} alt="AI generated image of kieri ayibadoubara using Dawn AI app" />
                        </div>
                        <div className={style.imageContainer}>
                            <img src={IMG2} alt="AI generated image of kieri ayibadoubara using Dawn AI app" />
                        </div>
                    </div>
                    <div className={style.imageGroup}>
                        <div className={style.imageContainer}>
                            <img src={IMG3} alt="AI generated image of kieri ayibadoubara using Dawn AI app" />
                        </div>
                        <div className={style.imageContainer}>
                            <img src={IMG4} alt="AI generated image of kieri ayibadoubara using Dawn AI app" />
                        </div>
                    </div>
                </div>
            </section>
            <div className={style.imageSlider}>
                <div>
                    <img src={mbtoken} alt="mbtoken transparent logo and title" srcset="" />
                </div>
                <div>
                    <img src={metamask} alt="meta mask transparent logo and title" srcset="" />
                </div>
                <div>
                    <img src={opensea} alt="opensea transparent logo and title" />
                </div>
            </div>
            <section className={style.cardInfo}>
                <h2>Inspiration for your next adventure</h2>
                <div>
                    <ImageCellContainer cardsArray={cards}></ImageCellContainer>
                </div>
            </section>
            <section className={`${style.grid2Column} ${style.moreInfo} inline-padding`}>
                <div className={`inline-padding`}>
                    <h2>Metabnb NFTs</h2>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div>
                    <div className={`${style.rotate1} ${style.infoImg}`}>
                        <img src={IMG4} alt="" />
                    </div>
                    <div className={`${style.rotate2} ${style.infoImg}`}>
                        <img src={IMG4} alt="" />
                    </div>
                    <div className={`${style.rotate3} ${style.infoImg}`}>
                        <img src={IMG4} alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;