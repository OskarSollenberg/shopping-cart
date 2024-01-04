import Body from "./components/Body";
import Header from "./components/Header";

import { useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState(0);

    function handleAddToCart() {
        const newItemCount = cartItems + 1;
        setCartItems(newItemCount);
    }

    return (
        <div>
            <Header cartItems={cartItems} />
            <Body onAdd={handleAddToCart} />
        </div>
    );
}

export default App;
