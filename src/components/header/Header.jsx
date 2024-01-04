import Cart from "../cart/Cart";
import "./headerStyles.css";
import { logoTypes } from "../../data";

export default function Header() {
    return (
        <header className="header">
            <img src={image} alt="react-logo" />
            <Cart />
        </header>
    );
}
