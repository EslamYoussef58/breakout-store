import React from 'react'
import Banner from './Home/Banner'
import Hero from './Home/Hero'
import BigSale from './Home/BigSale'
import WomenProduct from './Home/WomenProduct'
import MenProduct from './Home/MenProduct'
import NewArrival from './Home/NewArrival'
import Services from './Home/Services'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <BigSale />
      <NewArrival />
      <WomenProduct />
      <MenProduct />
      <Services />
    </div>
  )
}

export default Home