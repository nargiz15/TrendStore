import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Hero from "./Components/Hero/Hero"
import Header from "./Components/Layout/Header"
import Products from "./Components/Products/Products"




function App() {

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler=()=>{
    setCartIsShow(true)
  }


  const hideCart =(e)=>{
    e.preventDefault()
    setCartIsShow(false)
  }
  return (
    <>
     {cartIsShow && <Cart closeCart={hideCart}/>}
     <Header onShowCart ={showCartHandler}/>
     <Hero/>
     <Products/>
    </>
  )
}

export default App
