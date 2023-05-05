import React, { Fragment, useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_fAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  // const [product, setProduct] = useState([]);
  const [{ loading, error, data }, dispatch] = useReducer(logger(reducer), {
    data: [],
    loading: true,
    error: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api');
        // console.log(result.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
      }
      // setProduct(result.data);
    };
    fetchData();
  }, []);
  console.log(loading, error, { data });
  return (
    <Fragment>
      <h1>Featured Products</h1>
      <div className='products'>
        {loading ? (
          <div>Loading...</div>
        ) : error.length !== 0 ? (
          <div>{error}</div>
        ) : (
          data?.products.map((product) => {
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
          })
        )}
      </div>
    </Fragment>
  );
};

export default Home;
