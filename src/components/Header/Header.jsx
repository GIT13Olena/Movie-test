import { NavLink } from "react-router-dom";
import header from './Header.module.css';

function Header() {
    return(
        <header className={header.header}>
            <h1 className={header.header__title}>Movie</h1>
            <nav className={header.header__navigation}>
            <NavLink to="/" className={header.header__nav_link}>
                <strong>Home</strong>
            </NavLink>
            <NavLink to="/favorite" className={header.header__nav_link}>
                 <strong>Favorite</strong>
            </NavLink>
            <NavLink to="/add/movie" className={header.header__nav_link}>
                 <strong>Add Movie</strong>
            </NavLink>
        </nav>
        </header>
    )
}
export default Header