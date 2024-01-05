import Product from "../product/Product";
import { products } from "../../data";

import "./bodyStyles.css";

export default function Body(props) {
    const { addItem } = props;
    return (
        <div className="body">
            {products.map((product) => {
                return (
                    <Product
                        name={product.name}
                        price={product.price}
                        image={product.url}
                        addItem={addItem}
                    />
                );
            })}
        </div>
    );
}
