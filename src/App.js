import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './Next';
import HomePage from './HomePage';

export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products"element={<ProductList />}/>
      </Routes>
    </Router>
    </>
  )

};

  



