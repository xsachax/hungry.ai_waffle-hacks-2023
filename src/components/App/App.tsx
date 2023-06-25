import "./App.css";
import Navbar from "../Navbar/Navbar.tsx";
import Hero from "../Hero/Hero.tsx";
import Footer from "../Footer/Footer.tsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="column w-full m-auto border-gray-600 border-8 rounded-2xl bg-gray-700 p-8">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
