import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<div className='h-28 rounded-3xl bg-slate-900 mx-auto sticky top-4 flex align-center justify-between gap-6 mr-5 ml-5 mb-10'>
				<div className='leftside flex align-center justify-center'>
					<ul className='navbar-links pl-5'>
						<li className='pt-5 pl-2'>
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
								<img
									className='navLogo'
									src='/Asset/Hungry.Ai.png'
									alt='Description of the image'
								/>
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
