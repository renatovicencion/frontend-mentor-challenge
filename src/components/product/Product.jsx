import React from "react";
import DetailsProduct from "@/components/product/DetailsProduct";
import SlideProduct from "@/components/product/SlideProduct";

const Product = () => {
	return (
		<main className="grid grid-cols-1 gap-8 md:grid-cols-2">
			<SlideProduct />
			<DetailsProduct />
		</main>
	);
};

export default Product;
