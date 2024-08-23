import React, { useContext } from 'react'
import { ShopContext }  from '../Components/Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from './ProductDisplay'
import ProductDescription from './ProductDescription'
import SmallProduct from './SmallProduct'


const ProductDetails = () => {

  const { all_product} = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      
      <ProductDisplay product={product}/>
      <ProductDescription />
      <SmallProduct />
    </div>
  )
}

export default ProductDetails