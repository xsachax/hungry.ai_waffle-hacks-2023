import { useState } from "react";
import Prompt from "../Prompt/Prompt.tsx";
import "./App.css";
import Navbar from "../Navbar/Navbar.tsx";
import Hero from "../Hero/Hero.tsx";
import DrawGame from "../DrawGame/DrawGame.jsx";
import Footer from "../Footer/Footer.tsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full m-auto border-gray-600 border-8 rounded-2xl bg-gray-700 p-8">
        <Prompt />
        {/*<Footer />*/}
      </div>
    </>
  );
}

export default App;
