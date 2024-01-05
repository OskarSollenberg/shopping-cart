import "./cartStyles.css";
import { cartImage } from "../../data";

export default function Cart(props) {
    const { cartItems } = props;

    return (
        <div className="cart">
            <img src={cartImage.url} alt="" />({cartItems})
        </div>
    );
}
