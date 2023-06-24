import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<div className='h-28 w-23/24 rounded-3xl bg-neutral-900 mx-auto sticky top-4 flex align-center justify-between gap-6'>
				<div className='leftside flex align-center justify-center'>
					<ul className='navbar-links pt-7 pl-10'>
						<li className='navButtons'>
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
								Logo
							</Link>
						</li>
					</ul>
				</div>
				<div className='rightside'>
					<ul className='flex align-center justify-center gap-20 pt-7 pr-10'>
						<li className='navButtons'>
							<Link
								className=''
								activeClass='active'
								to='prompt'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								href='#prompt'
							>
								Prompt
							</Link>
						</li>
						<li className='navButtons'>
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
								About
							</Link>
						</li>
						<li className='navButtons'>
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
								Support
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
export default Navbar;
