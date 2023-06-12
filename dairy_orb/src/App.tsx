import { Route, Routes } from 'react-router-dom';
import ListGroup from './components/ListGroup';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Products" element={<ListGroup />} />
      </Routes>
      <Home />
    </>
  )
}

export default App

