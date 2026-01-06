import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <>
    
     <Header />
   
    <div className='home'>
      <img  className='home__image' src="/images/Hero.jpg" alt="" />   

      <Product 
        id="12321341"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={29.99}
        rating={5}
        image="/images/Drone.jpg"
      />   
    </div>

     </>

  )
}

export default Home
