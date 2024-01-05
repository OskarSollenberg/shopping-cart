import "./cartStyles.css";
import { cartImage } from "../../data";
import { useState } from "react";

export default function Cart(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = props;

    function handleOpenCart() {
        setIsCartOpen(!isCartOpen);
    }

    function handleCloseCart() {
        setIsCartOpen(false);
    }

    return (
        <div className="cart">
            <img
                onMouseEnter={handleOpenCart}
                className="cart__img"
                src={cartImage.url}
                alt=""
            />
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
