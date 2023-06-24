import { useState } from "react";
import Prompt from "../Prompt/Prompt.tsx";
import "./App.css";
import Navbar from "../Navbar/Navbar.tsx";
import Hero from "../Hero/Hero.tsx";
import Footer from "../Footer/Footer.tsx";

function App() {
	//const [count, setCount] = useState(0);

	return (
		<>
			<div className='column w-full'>
				<Navbar />
				<Prompt />
				<Footer />
			</div>
		</>
	);
}

export default App;
