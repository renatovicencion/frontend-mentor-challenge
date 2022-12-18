import React, { useEffect, useRef, useState } from "react";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const SlideProduct = ({
	arrayImgs = [],
	arraySmallImgs = [],
	isOpenModal = false,
	handleOpenModal = null,
	handleCloseModal = null,
	...props
}) => {
	const [imgIndex, setImgIndex] = useState(0);

	const btnSlider = useRef(null);

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

	const handleChangeImg = (index) => setImgIndex(index);

	useEffect(() => {
		if (isOpenModal) btnSlider.current.classList.remove("md:hidden");
	}, [isOpenModal]);

	return (
		<section {...props}>
			{isOpenModal && (
				<button
					className="text-right md:col-span-4"
					onClick={handleCloseModal}
				>
					cerrar
				</button>
			)}
			<div className="relative col-span-4">
				<img
					src={arrayImgs[imgIndex]}
					alt="product"
					className="aspect-[16/12] w-full md:aspect-[16/17] md:cursor-pointer md:rounded-md"
					onClick={handleOpenModal}
				/>
				<div
					ref={btnSlider}
					className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-3 md:hidden"
				>
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
			{arraySmallImgs.map((smallImg, index) => (
				<div
					key={index}
					className="relative cursor-pointer md:overflow-hidden md:rounded-md"
					onClick={() => handleChangeImg(index)}
				>
					<img
						src={smallImg}
						alt="product"
						className="hidden md:block md:rounded-md"
					/>
					<span
						className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
							imgIndex === index && "bg-[rgba(255,255,255,0.5)]"
						}`}
					></span>
				</div>
			))}
		</section>
	);
};

export default SlideProduct;
