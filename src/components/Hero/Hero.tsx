import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="hero">
        <Link
          className=""
          activeClass=""
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href="#hero"
        >
          Test Link
        </Link>
      </div>
    </>
  );
}
