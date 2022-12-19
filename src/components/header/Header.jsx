import React, { useContext, useState } from "react";
import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetailsHeader from "@/components/header/CartDetailsHeader";
import { CartContext } from "@/context/CartContext";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

	const { cartProducts } = useContext(CartContext);
	const totalQuantityProduct = cartProducts.reduce(
		(acc, current) => current.quantity + acc,
		0
	);

	const handleOpenMenu = () => {
		setIsOpenMenu(true);
	};

	const handleCloseMenu = () => {
		setIsOpenMenu(false);
	};

	const handleOpenDetailsCart = () => {
		setIsOpenDetailsCart(!isOpenDetailsCart);
	};

	return (
		<>
			<header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
				<button className="md:hidden" onClick={handleOpenMenu}>
					<MenuIcon />
				</button>
				<img
					className="mr-auto mb-1 md:mr-0"
					src={LogoSneakers}
					alt="sneakers"
				/>
				<nav
					className={`font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:text-left ${
						isOpenMenu
							? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8"
							: "hidden"
					}`}
				>
					<button
						className="mb-12 md:hidden"
						onClick={handleCloseMenu}
					>
						<CloseIcon className="fill-grayish-blue" />
					</button>
					<NavLinkHeader text="Collections" />
					<NavLinkHeader text="Men" />
					<NavLinkHeader text="Women" />
					<NavLinkHeader text="About" />
					<NavLinkHeader text="Contact" />
				</nav>
				<div className="flex gap-4">
					<button
						onClick={handleOpenDetailsCart}
						className="relative"
					>
						<CartIcon />
						{totalQuantityProduct !== 0 && (
							<span className="absolute top-0 right-0 w-full translate-x-1 rounded-full bg-orange-primary px-1 text-xs font-bold text-white">
								{totalQuantityProduct}
							</span>
						)}
					</button>
					<img src={AvatarImage} alt="avatar" className="w-10" />
					{isOpenDetailsCart && <CartDetailsHeader />}
				</div>
			</header>
			<span className="container mx-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
		</>
	);
};

export default Header;
