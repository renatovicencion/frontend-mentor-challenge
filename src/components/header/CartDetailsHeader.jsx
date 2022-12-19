import React, { useContext } from "react";

import DeleteIcon from "@/components/icons/DeleteIcon";
import ImgSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";

import { CartContext } from "@/context/CartContext";

const CartDetailsHeader = () => {
	const { cartProducts, deleteCartProduct } = useContext(CartContext);

	return (
		<section className="absolute top-[125%] left-0 z-10 w-full md:top-full md:left-full md:max-w-lg md:-translate-x-full">
			<div className="mx-4 rounded-md bg-white">
				<h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
				<hr />
				{cartProducts.length === 0 && (
					<p className="py-8 text-center">Your cart is empty</p>
				)}
				{cartProducts?.map((product) => (
					<article
						key={product.id}
						className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
					>
						<img
							src={product.img}
							alt="product"
							className="rounded-md"
						/>
						<div>
							<h6>{product.title}</h6>
							<div>
								<span>
									${product.discountPrice} x{" "}
									{product.quantity}
								</span>{" "}
								<span className="font-bold">
									$
									{(
										product.discountPrice * product.quantity
									).toFixed(2)}
								</span>
							</div>
						</div>
						<button
							className="ml-auto"
							onClick={() => deleteCartProduct(product.id)}
						>
							<DeleteIcon className="fill-[#C3CAD9] hover:fill-orange-primary" />
						</button>
					</article>
				))}
				{cartProducts.length !== 0 && (
					<div className="px-6 pb-8">
						<button className="w-full rounded-md bg-orange-primary py-4 text-white shadow-md transition-all hover:bg-orange-700">
							Checkout
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default CartDetailsHeader;
