import { Link } from 'react-router-dom';

function ListGroup() {
    return (
        <>

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
