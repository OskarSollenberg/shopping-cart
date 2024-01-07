// import Body from "./components/Body";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

import { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";

function App() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems") || "[]";
        setCartItems(JSON.parse(cartItems));
    }, []);

    function handleAddCartItem(name) {
        setCartItems((prev) => {
            const newCartItems = [...prev, name];
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
            return newCartItems;
        });
    }

    return (
        <div>
            <Header cartItems={cartItems} />
            <Hero />
            <Body addItem={handleAddCartItem} />
        </div>
    );
}

export default App;
