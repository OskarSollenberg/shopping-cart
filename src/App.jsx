// import Body from "./components/Body";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

import { useState } from "react";

function App() {
    const [numbOfCartItems, setNumbOfCartItems] = useState(0);

    function handleAddCartItem() {
        const newNumbOfCartItems = numbOfCartItems + 1;
        setNumbOfCartItems(newNumbOfCartItems);
    }

    return (
        <div>
            <Header cartItems={numbOfCartItems} />
            <Body addItem={handleAddCartItem} />
        </div>
    );
}

export default App;
