import "./cartStyles.css";
import { cartImage } from "../../data";
import { useState } from "react";

export default function Cart(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = props;

    function handleOpenCart() {
        {
            isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
        }
    }

    return (
        <>
            <div className="cart">
                <img
                    onClick={handleOpenCart}
                    className={`cart__img ${isCartOpen && "cart__img--active"}`}
                    src={cartImage.url}
                    alt=""
                />
                <p
                    className={`cart__counter ${
                        cartItems > 0 && "cart__counter--active"
                    }`}
                >
                    {cartItems}{" "}
                </p>
            </div>

            <div className={`cart__list ${isCartOpen && "cart__list--active"}`}>
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
                <p>Cart Item</p>
            </div>
        </>
    );
}
