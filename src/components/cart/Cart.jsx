import "./cartStyles.css";

export default function Cart(props) {
    const { cartItems } = props;
    return <div className="cart">Cart({cartItems})</div>;
}
