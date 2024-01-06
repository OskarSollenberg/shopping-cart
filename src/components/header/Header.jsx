import Cart from "../cart/Cart";
import "./headerStyles.css";
import { headerLogo } from "../../data";

export default function Header(props) {
    const { cartItems } = props;

    return (
        <header className="header">
            <img src={headerLogo.url} className="logo"></img>

            <nav className="site__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <Cart cartItems={cartItems} />
        </header>
    );
}
