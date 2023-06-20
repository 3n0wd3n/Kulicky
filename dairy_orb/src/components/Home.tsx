import ball from "../assets/ball.svg";
import milk from "../assets/milk.svg";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaUndo } from "react-icons/fa";

export default function Home({count, setCount}) {
  
  return (
    <>
      {count == 3 && (
        <ul className="navBar">
          <li className="listItem">About us</li>
          <li className="listItem">
            <Link to="/Products">Products</Link>
          </li>
          <li className="listItem">Contact</li>
        </ul>
      )}
      <div>
        {/* <a href="#" target="_blank" onClick={() => setCount((count) => count + 1)}>
                        <img  src={viteLogo} className="logo" alt="Logo" />
                    </a> 
                */}

        <div className="logo-container">
          <img
            onClick={() => setCount((count) => count + 1)}
            src={milk}
            className="logo"
            alt="Logo"
          />
          <img src={ball} alt="Ball" className="ball" />
        </div>
      </div>
      <div className="card">
        <button>click count is {count}</button>
        {/* <button onClick={() => setCount(0)}>
                    reset count
                </button> */}
        {count > 0 && <FaUndo onClick={() => setCount(0)} />}
      </div>
      <p className="read-the-docs">
        A childhood memory that was once a spark instantly turned into a fire of
        ideas. But even the most unusual ideas sometimes happened only in the{" "}
        <span>third</span> try 😉.
      </p>
    </>
  );
}
