import ball from '../assets/ball.svg'
import milk from '../assets/milk.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './Home.css'

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                {/* <a href="#" target="_blank" onClick={() => setCount((count) => count + 1)}>
                        <img  src={viteLogo} className="logo" alt="Logo" />
                    </a> 
                */}

                <div className="logo-container">
                    <img onClick={() => setCount((count) => count + 1)} src={milk} className="logo" alt="Logo" />
                    <img src={ball} alt="Ball" className="ball" />
                </div>
            </div>
            <div className="card">
                <button >
                    click count is {count}
                </button>
                <button onClick={() => setCount(0)}>
                    reset count
                </button>
            </div>
            <p className="read-the-docs">
                A childhood memory that was once a spark instantly turned into a fire of ideas. But even the most unusual ideas sometimes happened only after the <span>third</span> try 😉.
            </p>
            {
                count > 2 &&
                <ul>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                </ul>
            }
        </>
    )
}