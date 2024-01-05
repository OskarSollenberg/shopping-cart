import "./productStyles.css";
import Button from "../button/Button";

export default function Product(props) {
    const { name, price, image, addItem } = props;

    return (
        <div className="product">
            <div>
                <img className="product__img" src={image} alt="" />
                <p className="product__price">{price} kr</p>
            </div>
            <Button value={"Add to cart"} addItem={addItem} price={price} />
        </div>
    );
}
