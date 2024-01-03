import './Cart.css'
import CartItem from './CartItem'
import products from '../../ProductData'

const Cart = ({closeCart}) => {

   const cartItems=(
    <ul className='cart-items'>
        {products.map((product)=>(
        <CartItem key={product.id} product={product}/>
        ))}
    
   </ul>
   )

  return (
    <div className='offcanvas'>
    <div className="content">
        <div className="cart-head">
            <h2>Səbətim</h2>
            <a href="/" className='cart-close' onClick={closeCart}>X</a>
         </div>

         {cartItems}

        <div className="total">
            <span>Cəmi Ödəniş</span>
            <span>10 m</span>
        </div>
        <div className="actions">
            <button className='cart-order'>Sifariş ver</button>
            <button className='cart-clear'>Təmizlə</button>
        </div>
    </div>
    </div>
  )
}

export default Cart