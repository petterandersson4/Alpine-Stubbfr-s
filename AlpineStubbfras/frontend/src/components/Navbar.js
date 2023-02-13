import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<nav ref={navRef} className="row justify-content-right mt-0 p-2" >
				<h3><a style = {{color: "red"}}href="/"><b style = {{color: "#00AA81"}}>Alpine</b> Stubbfräs</a></h3>
				<h5><a href="/">Startsida</a></h5>
				<h5><a href="/Stubbfras">Stubbfräs</a></h5>
				<h5><a href="/Frashjul">Fräshjul</a></h5>
				<h5><a href="/Kontakt">Kontakt</a></h5>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
