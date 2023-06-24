import { Link } from "react-scroll";

function Navbar() {
	return (
		<>
			<div className='hero'>
				<ul className='navbar-links'>
					<li>
						<Link
							className=''
							activeClass='active'
							to='hero'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							href='#hero'
						>
							Test Link
						</Link>
					</li>
					<li>
						<Link
							className=''
							activeClass='active'
							to='hero'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							href='#hero'
						>
							Test Link
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
