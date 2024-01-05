import Cart from "../cart/Cart";
import "./headerStyles.css";
import { logoTypes } from "../../data";
{
}

export default function Header() {
    return (
        <header className="header">
            {logoTypes.map((logo) => (
                <img src={logo.url} className={logo.type}></img>
            ))}
            <Cart />
        </header>
    );
}
