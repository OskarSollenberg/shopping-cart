import "./cartStyles.css";
import { cartImage } from "../../data";

export default function Cart(props) {
    const { cartItems } = props;

    return (
        <div className="cart">
            <img className="cart__img" src={cartImage.url} alt="" />
            {cartItems > 0 && <p className="cart__counter">{cartItems} </p>}
            <div className="cart__list">
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
            </div>
        </div>
    );
}
