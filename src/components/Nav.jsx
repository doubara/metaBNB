import style from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props)=>{

    return (
        <nav className={`${style.navBar} inline-padding`}>
            <span>
                <img src="" alt="meta bnb logo" />
            </span>
            <ul className={style.navList}>
                <li>
                    <NavLink activeClassName='link-active' 
                    to='/home'>home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' 
                    to='/products'>products</NavLink>
                </li>
                {/* <li><a href="#">dolor</a></li>
                <li><a href="#">sit</a></li> */}
            </ul>
            <button className={style.navButton}>click me</button>
        </nav>
    )
};

export default Nav;