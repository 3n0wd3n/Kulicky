import { Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import App from '../App';

function ListGroup() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/Products" element={<ListGroup />} />
            </Routes>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>
            </ul>
        </>

    )
}

export default ListGroup;
