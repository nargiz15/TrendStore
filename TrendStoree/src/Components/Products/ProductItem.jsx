import React from 'react'
import Rating from './Rating';
import "./ProductItem.css"

const ProductItem = ({product}) => {
    const{name, img, description, price}=product;
  return (
    <li className='card'>
        <img src={img} alt={name} />
        <h3 className='product-title'>{name}</h3>
        <p>{description}</p>
        <div className="product-info">
            <Rating/>
            <span className='price'>{price} $</span>
        </div>
        <button className='add-to-cart'>Səbətə əlavə et</button>
        </li>
  )
}

export default ProductItem