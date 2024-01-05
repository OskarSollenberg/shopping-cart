import Cart from "../cart/Cart";
import "./headerStyles.css";
import { logoTypes } from "../../data";
{
}

export default function Header(props) {
    const { cartItems } = props;
    return (
        <header className="header">
            {logoTypes.map((logo) => (
                <img src={logo.url} className={logo.type}></img>
            ))}
            <Cart cartItems={cartItems} />
        </header>
    );
}
