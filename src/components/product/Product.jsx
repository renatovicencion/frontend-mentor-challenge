import React from "react";
import DetailsProduct from "@/components/product/col-details/DetailsProduct";
import Images from "@/components/product/col-images/Images";
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

const Product = () => {
	return (
		<main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
			<Images arrayImgs={arrayImgs} arraySmallImgs={arraySmallImgs} />
			<DetailsProduct />
		</main>
	);
};

export default Product;
