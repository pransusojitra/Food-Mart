import React, { useEffect, useState } from 'react';
import Productcard from './Productcard';
import axios from 'axios';


const Product = () => {

  const [data2, setData2] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/api/products");

    setData2(res.data);

  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div className='mt-3 d-flex justify-content-between align-items-center text-center flex-lg-row flex-md-row flex-column'>
        <h3 className='p-3'>Trending Products</h3>
        <div className='d-flex p-lg-3 me-lg-4 p-md-3 me-md-4 gap-4'>
          <p className='fw-semibold border-bottom border-dark'>ALL</p>
          <p>FRUITS & VAGES</p>
          <p>JUICES</p>
        </div>
      </div>

      <div className='d-flex flex-wrap justify-content-center'>
        {data2.map((item) => (
          <Productcard
            key={item.id}
            img={item.image}
            title={item.title}
            unit={item.unit}
            rating={item.rating}
            price={item.price}
          />

        ))}
      </div>
    </div>
  );
}

export default Product;
