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

      <div className="home__row">
          <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />   
         <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />  
         
      </div>

      <div className="home__row">
         <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />   
         <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />
         <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />
      </div>

      <div className="home__row">
         <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
            image="/images/Drone.jpg"
         />
      </div>
      
    </div>

     </>

  )
}

export default Home
