import style from './footercomponent.module.css';

const FooterComponent = (props) =>{

    return (
        <footer className={`${style.footer} inline-padding`}>
            <div>
                <div className={style.footerLogo}>
                    <img src="" alt="meta bnb logo" />
                </div>
                <p>lorem</p>
                <p>ipsum</p>
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