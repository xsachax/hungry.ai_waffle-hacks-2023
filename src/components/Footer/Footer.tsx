import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className='marketing-footer'>
			<div className='footer-content'>
				<img
					src='../../../public/Asset/Hungry.Ai.png'
					alt='Description of the image'
				/>
				<p>Email: info@example.com</p>
				<p>Phone: 123-456-7890</p>
			</div>
		</footer>
	);
};

export default Footer;
