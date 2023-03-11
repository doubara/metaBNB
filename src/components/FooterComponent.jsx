import style from './footercomponent.module.css';
import whiteLogo from '../assets/metabnb-white-logo.png';
import facebookIcon from '../assets/facebook-white.png';
import twitterIcon from '../assets/twitter-white.png';
import circleIcon from '../assets/circle-white.png';

const FooterComponent = (props) =>{

    return (
        <footer className={`${style.footer} inline-padding`}>
            <div>
                <div className={style.footerLogo}>
                    <img src={whiteLogo} alt="meta bnb logo" />
                </div>
                <div className={style.socialIcons}>
                    <span>
                        <img src={facebookIcon} alt="facebook icon" />
                    </span>
                    <span>
                        <img src={circleIcon} alt="circle icon" />
                    </span>
                    <span>
                        <img src={twitterIcon} alt="twitter icon" />
                    </span>
                </div>
                
            </div>
            <div>
                <h3>link header</h3>
                <ul className={style.footerList}>
                    <li className={style.footerLink}>lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>sit-amet</li>
                </ul>
            </div>
            <div>
            <h3>link header</h3>
                <ul className={style.footerList}>
                    <li className={style.footerLink}>lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>sit-amet</li>
                </ul>
            </div>
            <div>
            <h3>link header</h3>
                <ul className={style.footerList}>
                    <li className={style.footerLink}>lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>sit-amet</li>
                </ul>
            </div>
        </footer>
    )
};

export default FooterComponent