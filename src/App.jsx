import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Product from "./components/Shop/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const itemAddHandler = (id) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      // Find target existing item index and object
      const existingCartItemIndex = updatedItems.findIndex(
        (product) => product.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      // If there's the target existing item object in the cart,
      // add "quantity" value + 1
      // If there's no target existing item object in the cart,
      // add the target existing item object to the cart
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (targetProduct) => targetProduct.id === id
        );
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  };

  const updateCartItemQuantityHandler = (productId, amount) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = { ...updatedItems[updatedItemIndex] };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  };

  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={updateCartItemQuantityHandler}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAdd={itemAddHandler} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
