import React, { useState } from "react";
import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const Header = () => {
	const [navClass, setNavClass] = useState(
		"hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:text-left"
	);

	const handleOpenMenu = () => {
		setNavClass(
			"absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:text-left"
		);
	};

	const handleCloseMenu = () => {
		setNavClass(
			"hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:text-left"
		);
	};

	return (
		<header className="container mx-auto flex items-center gap-8 px-4 py-8">
			<button className="md:hidden" onClick={handleOpenMenu}>
				<MenuIcon />
			</button>
			<img
				className="mr-auto mb-1 md:mr-0"
				src={LogoSneakers}
				alt="sneakers"
			/>
			<nav className={navClass}>
				<button className="mb-12 md:hidden" onClick={handleCloseMenu}>
					<CloseIcon />
				</button>
				<a href="#">Collections</a>
				<a href="#">Men</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
			<div className="flex gap-4">
				<button>
					<CartIcon />
				</button>
				<img src={AvatarImage} alt="avatar" className="w-10" />
			</div>
		</header>
	);
};

export default Header;