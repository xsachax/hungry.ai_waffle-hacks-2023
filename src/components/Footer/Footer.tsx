import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className='marketing-footer'>
			<div className='footer-content'>
				<img
					className='LogoImg'
					src='../../../public/Asset/Hungry.Ai.png'
					alt='Description of the image'
				/>
			</div>
			<div className='footer-content'>
				<p>Serving up culinary creativity with AI precision</p>
				<p>Email: info@example.com</p>
				<p>Phone: 123-456-7890</p>
			</div>
		</footer>
	);
};

export default Footer;
