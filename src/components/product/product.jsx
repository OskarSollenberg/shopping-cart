import "./productStyles.css";

export default function Product(props) {
    const { name, price, image, addItem, saveItem } = props;

    return (
        <div className="product">
            <img className="product__img" src={image} alt="" />
            <p>{name}</p>
            <button onClick={addItem}>{price}</button>
        </div>
    );
}
