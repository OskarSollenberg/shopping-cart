import "./productStyles.css";
import Button from "../button/Button";

export default function Product(props) {
    const { name, price, image, addItem } = props;

    return (
        <div className="product">
            <div>
                <p className="product__price">{price} kr</p>
                <img className="product__img" src={image} alt="" />
                <p>{name}</p>
            </div>
            <Button value={"Add to cart"} addItem={addItem} price={price} />
        </div>
    );
}
