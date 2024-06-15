import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Feel the Fear and Do It Anyway: Dynamic Techniques for Turning Fear, Indecision, and Anger into Power, Action, and Love"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51kmOuiHmhL.jpg"
            alt=""
          />

          <Product
            id="49538094"
            title="Giovacker Women's African Print Casual Party Dress Dashiki Traditional Costume"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71s1BKN9ypL._AC_UY879_.jpg"
            // "https://m.media-amazon.com/images/P/0300246226.01._SCLZZZZZZZ_SX500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title={
              "OLEVS Men's Automatic Mechanical Watch Luxury Dress Waterproof Self Winding Moon Phase Chronograph Stainless Steel Luminous Date Tourbillon Wristwatch for Men"
              // "Tide Power Pods Laundry Detergent Pacs with Febreze, 45Count, Botanical Rain Scent, Febreze Freshness with Odor Eliminators"
            }
            price={138}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+u43CDchL._AC_UX679_.jpg"
            // "https://m.media-amazon.com/images/I/81VppatfTFL._AC_SL1500_.jpg"
          />

          <Product
            id="23445930"
            title="Mens Suits 3 Piece Check Plaid Suit Single Breasted One Button Jackets Formal Dress Party Prom Casual Tuxedo Suits for Men"
            price={119.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/813bLV6nB4S._AC_UX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Jasonwell Magnetic Tiles Kids Magnetic Blocks Building Sets 3D Magnet Tile Building Blocks Magna Construction Educational STEM Toys Gifts for Toddlers Boys Girls 3 4 5 6 7 8 9 10 + Year Old"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+2tum06eL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title={
              "Tangkula White L Shaped Desk with Storage Shelves, Wooden Corner Computer Desk, Space-Saving Home Office Workstation, Gaming Desk, Writing Study Desk, L Shaped Office Desk"
            }
            price={120}
            rating={5}
            image="https://m.media-amazon.com/images/I/71q0qvcJMtL._AC_SL1500_.jpg"
          />

          <Product
            id="23445930"
            title="Weture Big and Tall Office Chair 400lbs, Office Chairs for Heavy People - Adjustable Lumbar Support Two Sets of Wheels, Executive Office Chair with Heavy Duty Metal Base, High Back Office Chair，Black"
            price={269.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/812NiZFidAL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple Late 2021 MacBook Pro M1 Pro chip 10-core CPU (16 inch, 16GB RAM, 1TB SSD Storage) (QWERTY English) Space Gray (Renewed Premium)"
            price={1799.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Fulocseny 2 Piece Modern Velvet Upholstered Living Room Set with 3-Seater Sofa and Loveseat, Jeweled Button Tufted Copper Nails Square Arms, 4 Pillows Included, Grey,5 Seater (Black + Velvet)"
            price={849.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91r1P-xOgrL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home