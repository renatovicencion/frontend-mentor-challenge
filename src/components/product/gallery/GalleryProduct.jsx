import React, { useState } from "react";
import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";

const GalleryProduct = ({ arrayImgs, arraySmallImgs }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () =>
		window.innerWidth > 767 && setIsOpenModal(true);

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<SlideProduct
				arrayImgs={arrayImgs}
				arraySmallImgs={arraySmallImgs}
				className="grid md:grid-cols-4 md:gap-4"
				handleOpenModal={handleOpenModal}
			/>
			{isOpenModal && (
				<>
					<ModalProduct
						arrayImgs={arrayImgs}
						arraySmallImgs={arraySmallImgs}
						isOpenModal={isOpenModal}
						handleCloseModal={handleCloseModal}
						className="hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-xl md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
					/>
					<span
						className="fixed top-0 left-0 h-full w-full bg-black/70"
						onClick={handleCloseModal}
					></span>
				</>
			)}
		</>
	);
};

export default GalleryProduct;
