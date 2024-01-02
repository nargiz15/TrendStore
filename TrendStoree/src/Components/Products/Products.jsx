import ProductItem from "./ProductItem"
import "./Products.css"
import products from '../../ProductData'

const Products = () => {

    const productList = products.map((product)=> (<ProductItem key={product.id} product={product}/>
    ));

  return (
    
    <main className='products-wrapper'>
      <ul className="products">
       {productList}
      </ul>
      

    </main>
  )
}

export default Products