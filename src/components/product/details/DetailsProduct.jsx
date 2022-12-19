import React, { useContext, useState } from "react";

import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/context/CartContext";

const DetailsProduct = ({ product }) => {
	const { addCartProduct } = useContext(CartContext);

	const [quantity, setQuantity] = useState(1);

	const handleIncrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrementQuantity = () => {
		if (quantity === 1) setQuantity(1);
		else setQuantity(quantity - 1);
	};

	const handleAddCartProduct = () => {
		addCartProduct({
			img: product.imagesSmall[0],
			id: product.id,
			discountPrice: (product.price * (1 - product.discount)).toFixed(2),
			title: product.title,
			quantity: quantity,
		});
	};

	return (
		<section className="container mx-auto px-4 md:px-0">
			<p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
				{product.subtitle}
			</p>
			<h2 className="mb-4 text-3xl font-bold">{product.title}</h2>
			<p className="mb-5 text-dark-grayish-blue">{product.description}</p>
			<div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr]">
				<span className="text-3xl">
					${(product.price * (1 - product.discount)).toFixed(2)}
				</span>
				<span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
					{product.discount * 100}%
				</span>
				<span className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
					${product.price.toFixed(2)}
				</span>
			</div>
			<div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
				<div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
					<button
						className="text-3xl text-orange-primary"
						onClick={handleDecrementQuantity}
					>
						-
					</button>
					<span className="text-xl">{quantity}</span>
					<button
						className="text-3xl text-orange-primary"
						onClick={handleIncrementQuantity}
					>
						+
					</button>
				</div>
				<button
					onClick={handleAddCartProduct}
					className="col-span-3 flex justify-center gap-3 rounded-md bg-orange-primary py-3 text-white shadow-md transition-all hover:bg-orange-700 md:col-span-1"
				>
					<CartIcon fill="#fff" className="fill-white" />
					<span>Add to cart</span>
				</button>
			</div>
		</section>
	);
};

export default DetailsProduct;
