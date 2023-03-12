import style from './nav.module.css';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import logo from '../assets/metabnb-logo.png';

const Nav = (props)=>{
    const navList  = useRef()
    const [navClicked, setNavClicked] = useState(false);
    function showNavlist(){
        setNavClicked(previousState => !previousState);
    }
    return (
        <nav className={`${style.navBar} inline-padding`}>
            <div className={style.logoContainer}>
                <img src={logo} alt="meta bnb logo" />
            </div>
            <ul ref={navList} className={`${style.navList} ${navClicked ? style.show : ''}`}>
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
                <li>
                    <button className={`${style.navButton} ${style.mobileButton}`}>Connect wallet</button>
                </li>
            </ul>
            <button className={`${style.navButton} ${style.desktopButton}`}>Connect wallet</button>
            <button onClick={()=> showNavlist()} className={`${style.hamburger} ${navClicked ? style.spanRotate : ''}`} type='button'>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
};

export default Nav;