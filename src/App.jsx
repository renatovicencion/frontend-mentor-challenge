import React from "react";
import Header from "@/components/header/Header";
import Product from "@/components/product/Product";
import CartContextProvider from "@/context/CartContext";

CartContextProvider;
const App = () => {
	return (
		<CartContextProvider>
			<Header />
			<Product />
		</CartContextProvider>
	);
};

export default App;
