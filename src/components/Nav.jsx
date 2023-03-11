import style from './nav.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/metabnb-logo.png';

const Nav = (props)=>{

    return (
        <nav className={`${style.navBar} inline-padding`}>
            <div className={style.logoContainer}>
                <img src={logo} alt="meta bnb logo" />
            </div>
            <ul className={style.navList}>
                <li>
                    <NavLink activeClassName='link-active' 
                    to='/home'>Home</NavLink>
                </li>
                <li><a href="#">Place to stay</a></li>
                <li>
                    <NavLink activeClassName='link-active' 
                    to='/products'>NFTs</NavLink>
                </li>
                
                <li><a href="#">Community</a></li>
            </ul>
            <button className={style.navButton}>Connect wallet</button>
        </nav>
    )
};

export default Nav;