import React, { useState } from "react";
import ImgProduct1 from "@/assets/images/image-product-1.jpg";
import ImgProduct2 from "@/assets/images/image-product-2.jpg";
import ImgProduct3 from "@/assets/images/image-product-3.jpg";
import ImgProduct4 from "@/assets/images/image-product-4.jpg";
import ImgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import ImgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import ImgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import ImgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const arrayImgs = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];

const SlideProduct = () => {
	const [imgIndex, setImgIndex] = useState(0);

	const handleClickNext = () => {
		imgIndex === arrayImgs.length - 1
			? setImgIndex(0)
			: setImgIndex(imgIndex + 1);
	};

	const handleClickPrev = () => {
		imgIndex === 0
			? setImgIndex(arrayImgs.length - 1)
			: setImgIndex(imgIndex - 1);
	};

	return (
		<section className="grid md:grid-cols-4 md:gap-8">
			<div className="relative col-span-4">
				<img
					src={arrayImgs[imgIndex]}
					alt="product"
					className="aspect-[16/12]"
				/>
				<div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-3">
					<button
						className="grid h-10 w-10 place-items-center rounded-full bg-white"
						onClick={handleClickPrev}
					>
						<PrevIcon />
					</button>
					<button
						className="grid h-10 w-10 place-items-center rounded-full bg-white"
						onClick={handleClickNext}
					>
						<NextIcon />
					</button>
				</div>
			</div>
			<img src={ImgProductSmall1} alt="" className="hidden md:block" />
			<img src={ImgProductSmall2} alt="" className="hidden md:block" />
			<img src={ImgProductSmall3} alt="" className="hidden md:block" />
			<img src={ImgProductSmall4} alt="" className="hidden md:block" />
		</section>
	);
};

export default SlideProduct;
