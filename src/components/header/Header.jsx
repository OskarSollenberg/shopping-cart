import Cart from "../cart/Cart";
import "./headerStyles.css";

export default function Header() {
    return (
        <header className="header">
            <h1>My React App!</h1>
            <Cart />
        </header>
    );
}
