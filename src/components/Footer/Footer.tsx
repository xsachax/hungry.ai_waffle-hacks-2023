import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className='marketing-footer'>
			<div className='footer-content'>
				<img
					className='LogoImg'
					src='/Asset/Hungry.Ai.png'
					alt='Description of the image'
				/>
			</div>
			<div className='footer-content'>
				<p>Serving up culinary creativity with AI precision</p>
			</div>
		</footer>
	);
};

export default Footer;
