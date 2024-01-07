import "./cartStyles.css";
import { cartImage } from "../../data";
import { useState } from "react";
import Button from "../button/Button";

export default function Cart(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems, onClick } = props;

    return (
        <>
            <div className="cart">
                <img
                    onClick={() => setIsCartOpen((prev) => !prev)}
                    className={`cart__img ${isCartOpen && "cart__img--active"}`}
                    src={cartImage.url}
                    alt=""
                />
                <p
                    className={`cart__counter ${
                        !isCartOpen &&
                        cartItems.length > 0 &&
                        "cart__counter--active"
                    }`}
                >
                    {cartItems.length}
                </p>
            </div>

            <div className={`cart__list ${isCartOpen && "cart__list--active"}`}>
                {cartItems.map((item) => {
                    return <p className="cart__list-item">{item}</p>;
                })}

                <Button
                    onClick={() => setIsCartOpen((prev) => !prev)}
                    value={"Checkout"}
                />
            </div>
        </>
    );
}
