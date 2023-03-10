import React from "react";
import DetailsProduct from "@/components/product/details/DetailsProduct";
import GalleryProduct from "@/components/product/gallery/GalleryProduct";
import ImgProduct1 from "@/assets/images/image-product-1.jpg";
import ImgProduct2 from "@/assets/images/image-product-2.jpg";
import ImgProduct3 from "@/assets/images/image-product-3.jpg";
import ImgProduct4 from "@/assets/images/image-product-4.jpg";
import ImgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import ImgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import ImgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import ImgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const arrayImgs = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];
const arraySmallImgs = [
	ImgProductSmall1,
	ImgProductSmall2,
	ImgProductSmall3,
	ImgProductSmall4,
];

const objectProduct = {
	id: 1,
	title: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	subtitle: "Sneaker Company",
	price: 250,
	discount: 0.5,
	images: arrayImgs,
	imagesSmall: arraySmallImgs,
};

const Product = () => {
	return (
		<main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
			<GalleryProduct
				arrayImgs={objectProduct.images}
				arraySmallImgs={objectProduct.imagesSmall}
			/>
			<DetailsProduct product={objectProduct} />
		</main>
	);
};

export default Product;
