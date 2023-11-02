import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import './App.css'
import NavBar from "./components/Header/NavBar";
import NavBarM from "./components/Header/Header_M/NavBarM";
import useResponsive from "./Responsive";
import { useDispatch } from "react-redux";
import { scrollTop } from "./services/StateManage/CartSlice";

const App = () => {


  const dispatch = useDispatch()
    const handleScroll = (e) => {
      const offset = e.target.scrollTop
      if (40 < offset) {
        dispatch(scrollTop({scroll:true}))
      } else {
        dispatch(scrollTop({scroll:false}))
      }
    };

    const navHeight = document.getElementById('NavHeight')

    const setHeight = navHeight?.clientHeight;

    const classH = ` flex min-h-[${setHeight+20}px] w-full bg-black `

  const  {mobile,tablet,desktop}  = useResponsive()

  return (
    <BrowserRouter>
    <div onScroll={handleScroll} className=" pt-[140px] bg-[#d8c7af] relative w-full max-h-screen overflow-y-auto flex flex-col " >
     <div id="NavHeight" className=" w-full flex h-auto fixed top-0 z-[99999]  " >
     {
        mobile && <NavBarM/>  
      }
      {
        desktop  && <NavBar/>
      }
      {
        tablet  && <NavBarM/>
      }
     </div>
      

      <div className=" flex flex-col h-auto w-full " >
      <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:id' element={<ProductDetail />} />
            <Route path='/category/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    
        
    </div>
   
    </BrowserRouter>
  )
}

export default App
