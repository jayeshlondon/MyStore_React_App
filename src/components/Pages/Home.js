
import React from 'react';
import Product from '../Products/Products'


import { Wrapper } from './Home.styles';


const Home =(props) =>{

  return (
    <Wrapper>
      {props.products?.map((ele, i) => (
        <Product key={i} product={ele} />
      ))}
    </Wrapper>
  )
}

export default Home;


