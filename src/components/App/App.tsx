import { useState } from "react";
import Prompt from "../Prompt/Prompt.tsx";
import "./App.css";
import Navbar from "../Navbar/Navbar.tsx";
import Hero from "../Hero/Hero.tsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full m-auto">
        <Prompt />
        {/* 
      <div className="app">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <button
          className="border border-gray-300 rounded-md px-4 py-2"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
      */}
      </div>
    </>
  );
}

export default App;
