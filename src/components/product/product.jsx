import "./productStyles.css";

export default function Product(props) {
    const { name, price, image } = props;

    return (
        <div className="product">
            <img className="product__img" src={image} alt="" />
            <p>{name}</p>
            <button>{price}</button>
        </div>
    );
}
