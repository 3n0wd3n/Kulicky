import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount}/>} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App

