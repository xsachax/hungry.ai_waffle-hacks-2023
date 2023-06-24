import { useState } from "react";
import Prompt from "../Prompt/Prompt.tsx";
import "./App.css";
import Navbar from "../Navbar/Navbar.tsx";
import Hero from "../Hero/Hero.tsx";

function App() {
	//const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Hero />
			<Prompt />
		</>
	);
}

export default App;
