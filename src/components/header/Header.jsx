import Cart from "../cart/Cart";
import "./headerStyles.css";
import { headerLogo } from "../../data";
{
}

export default function Header(props) {
    const { cartItems } = props;

    return (
        <header className="header">
            <img src={headerLogo.url} className="logo"></img>
            <Cart cartItems={cartItems} />
        </header>
    );
}
