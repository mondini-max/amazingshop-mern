import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import axios from 'axios';

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api');
      // console.log(result.data);
      setProduct(result.data);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <h1>Featured Products</h1>
      <div className='products'>
        {data.products.map((product) => {
          return (
            <div className='product' key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className='product-info'>
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Home;
