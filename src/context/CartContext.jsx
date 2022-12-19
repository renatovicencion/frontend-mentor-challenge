import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const addCartProduct = (product) => {
		if (cartProducts.length === 0) {
			return setCartProducts([...cartProducts, product]);
		}

		setCartProducts(
			cartProducts.map((item) => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: item.quantity + product.quantity,
					};
				} else {
					return item;
				}
			})
		);
	};
	const deleteCartProduct = (product_id) => {
		setCartProducts(
			cartProducts.filter((product) => product.id !== product_id)
		);
	};

	return (
		<CartContext.Provider
			value={{ cartProducts, addCartProduct, deleteCartProduct }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
