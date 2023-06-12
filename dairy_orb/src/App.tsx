import { Route, Routes } from 'react-router-dom';
import ListGroup from './components/ListGroup';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ListGroup />} />
      </Routes>
    </>
  )
}

export default App

