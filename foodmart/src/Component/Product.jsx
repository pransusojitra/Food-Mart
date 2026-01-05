import React from 'react';
import "./Product.css"
import Productcard from './Productcard';
import img1 from "../assets/thumb-bananas.png"
import img2 from "../assets/thumb-biscuits.png"
import img3 from "../assets/thumb-cucumber.png"
import img4 from "../assets/thumb-milk.png"
import img5 from "../assets/thumb-bananas.png"
import img6 from "../assets/thumb-biscuits.png"
import img7 from "../assets/thumb-cucumber.png"
import img8 from "../assets/thumb-milk.png"
import img9 from "../assets/thumb-bananas.png"
import img10 from "../assets/thumb-biscuits.png"


const Product = () => {
  return (
    <div>
      <div className='mt-3 d-flex justify-content-between flex-lg-row flex-md-row flex-column'>
        <h3 className='p-3'>Trending Products</h3>
        <div className='d-flex p-3 me-4 gap-4'>
          <p>ALL</p>
          <p>FRUITS & VAGES</p>
          <p>JUICES</p>
        </div>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        <Productcard
          img={img1}
          title="Fresh Organic Bananas"
          unit="6 pcst"
          rating="4.6"
          price="$4.00"
        />
        <Productcard
          img={img2}
          title="Crunchy Butter Cookies"
          unit="200 gt"
          rating="4.4"
          price="$3.50"
        />
        <Productcard
          img={img3}
          title="Fresh Green Cucumber"
          unit="500 g"
          rating="4.3"
          price="$2.20"
        />
        <Productcard
          img={img4}
          title="Pure Fresh Milk"
          unit="1 l"
          rating="4.5"
          price="$1.80"
        />
         <Productcard
          img={img5}
          title="Fresh Organic Bananas"
          unit="6 pcst"
          rating="4.6"
          price="$4.00"
        />
        <Productcard
          img={img6}
          title="Crunchy Butter Cookies"
          unit="200 gt"
          rating="4.4"
          price="$3.50"
        />
        <Productcard
          img={img7}
          title="Fresh Green Cucumber"
          unit="500 g"
          rating="4.3"
          price="$2.20"
        />
        <Productcard
          img={img8}
          title="Pure Fresh Milk"
          unit="1 l"
          rating="4.5"
          price="$1.80"
        />
         <Productcard
          img={img9}
          title="Fresh Organic Bananas"
          unit="6 pcst"
          rating="4.6"
          price="$4.00"
        />
        <Productcard
          img={img10}
          title="Crunchy Butter Cookies"
          unit="200 gt"
          rating="4.4"
          price="$3.50"
        />
      </div>
    </div>
  );
}

export default Product;
