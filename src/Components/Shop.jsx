import React, { useState } from 'react'
import ProductSidebar from './ProductSidebar'
import Recommended from './Recommended'
import all_product from '../data/Data'
import CategoryShop from './CategoryShop';





function Shop  () {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(all_product, selected) {
    let filteredProducts = all_product

    if(selected) {
      filteredProducts = filteredProducts.filter(
        ({ title, price, color, brand , id }) => 
        title === selected ||
        price === selected ||
        color === selected ||
        brand === selected ||
        id === selected
      )
    }

    return filteredProducts.map(
      ({img, title, price, brand, id}) => (
        <CategoryShop 
        key={Math.random()}
        img={img}
        title={title}
        price={price}
        brand={brand}
        id={id}
        />
      )
    )
  }

  const result = filteredData(all_product, selectedCategory);

  return (
    <div className='w-11/12 m-auto mt-20'>
        <div className="shop">
      <ProductSidebar handleChange={handleChange} />
      <Recommended result={result} handleClick={handleClick} />
      {/* <Products result={result} /> */}
        </div>
      </div>
  )
}

export default Shop