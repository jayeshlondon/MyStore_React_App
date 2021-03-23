import React, { Component } from 'react';
import Home from '../Pages/Home';
import Pagination from '../Pages/Pagination';
import axios from 'axios';
import { Wrapper,StyledButton } from './DataQuery.style';

import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'


const options = {
  method: 'GET',
  url: process.env.REACT_APP_URL,
  params: { name: 'laptop' },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_x_rapidapi_key,
    'x-rapidapi-host': process.env.REACT_APP_x_rapidapi_host,
  },
}

class DataQuery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      originalList: [],
      multiPageProductList:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  callbackFunction = (childdata)=> {
    this.setState({products : childdata})
  }
  componentDidMount() {
    axios.request(options).then((response) => {
      let data = response.data
      let result = []
      Object.keys(data).map((key) => result.push(data[key]))
      let productsList = result.filter((item) => item.img != '')

      productsList.forEach((product, i) => {
        product.rowId = i + 1
      })
      const paginationArray = productsList.reduce((acc,curr,i)=>{

        if(!(i % 5)){
          acc.push(productsList.slice(i,i+5));
        }
        return acc;
      },[]);
      this.setState({
        products: paginationArray[0],
        originalList: productsList,
        multiPageProductList: paginationArray,
      })
      console.log(this.state.products)
      console.log(this.state.multiPageProductList)
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    const text = event.target.value.toLowerCase()
    if (text != '') {
      const filteredList = this.state.products.filter((d) =>
        d.item.toLowerCase().includes(text)
      )
      console.log(filteredList)
      this.setState({ products: filteredList })
    } else {
      this.setState({ products: this.state.originalList })
    }
  }
  render() {
    return (
      <Wrapper>
        <StyledButton onClick={() => console.log('hello')}>
          <Badge badgeContent={1} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <div className='searchDiv'>
          <label>Search Product</label>
          <input
            type='text'
            placeholder='Search'
            onChange={this.handleChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
        </table>
        <Home products={this.state.products} />
        <Pagination
          products={this.state.multiPageProductList}
          parentCallback={this.callbackFunction}
          allProducts={this.state.originalList}
        />
      </Wrapper>
    )
  }
}

export default DataQuery;

