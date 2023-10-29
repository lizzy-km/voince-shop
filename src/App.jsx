import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import './App.css'
import NavBar from "./components/Header/NavBar";
import NavBarM from "./components/Header/Header_M/NavBarM";
import useResponsive from "./Responsive";

const App = () => {

  const  {mobile,tablet,desktop}  = useResponsive()

  console.log(mobile,tablet,desktop);

  return (
    <BrowserRouter>
    <div className=" relative w-full h-screen flex flex-col " >
      {
        mobile && <NavBarM/>  
      }
      {
        desktop  && <NavBar/>
      }
      {
        tablet  && <NavBarM/>
      }
    
        <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:id' element={<ProductDetail />} />
            <Route path='/category/:id' element={<ProductDetail />} />
        </Routes>
    </div>
   
    </BrowserRouter>
  )
}

export default App
