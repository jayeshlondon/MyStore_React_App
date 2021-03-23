

import React from 'react';
import {Wrapper} from './Pagination.style';


const Pagination = (props) => {


 return (
   <Wrapper>
     {props.products.map((ele, i) => (
       <button id={i} key={i} onClick={() => props.parentCallback(ele)}>
         {i + 1}
       </button>
     ))}
     <button onClick={() => props.parentCallback(props.allProducts)}>
      All
     </button>
   </Wrapper>
 )
}

export default Pagination;
