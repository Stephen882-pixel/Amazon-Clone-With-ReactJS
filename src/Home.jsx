import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <>
      <Header />

      <div className='home'>
        <img className='home__image' src="/images/Hero.jpg" alt="" />

        {/* Row 1 */}
        <div className="home__row">
          <Product
            id="1001"
            title="DJI Mini 3 Pro Camera Drone with 4K HDR Video"
            price={499.99}
            rating={5}
            image="/images/Drone.jpg"
          />

          <Product
            id="1002"
            title="Apple AirPods Pro (2nd Generation) with MagSafe Case"
            price={249.99}
            rating={5}
            image="/images/Airpods.jpg"
          />
        </div>

        {/* Row 2 */}
        <div className="home__row">
          <Product
            id="1003"
            title="Samsung 55-Inch 4K Smart UHD TV (Crystal Display)"
            price={699.99}
            rating={4}
            image="/images/SmartTV.jpg"
          />

          <Product
            id="1004"
            title="Sony WH-1000XM5 Wireless Noise Cancelling Headphones"
            price={399.99}
            rating={5}
            image="/images/HeadPhones.jpg"
          />

          <Product
            id="1005"
            title="Apple Watch Series 9 GPS, 45mm Smartwatch"
            price={429.99}
            rating={4}
            image="/images/AppleWatch.jpg"
          />
        </div>

        {/* Row 3 */}
        <div className="home__row">
          <Product
            id="1006"
            title="PlayStation 5 Console – Ultra HD Gaming"
            price={549.99}
            rating={5}
            image="/images/PS5.jpg"
          />
        </div>

      </div>
    </>
  )
}

export default Home
