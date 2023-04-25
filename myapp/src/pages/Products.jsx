/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import {add} from "../redux/Slice";
import { fetchProducts } from '../redux/productslice';
import {STATUSES} from "../redux/productslice";
const Products = () => {
    // const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data:products,status} = useSelector((state)=>state.product);
    // const fetchProducts=async()=>{
    // await axios.get("https://fakestoreapi.com/products")
    // .then((res)=>setProducts(res?.data ? res?.data : []));
    // }
const handleAdd = (data)=>{
dispatch(add(data));
}
useEffect(()=>{
// fetchProducts();
dispatch(fetchProducts());
},[])
if(status === STATUSES.LOADING)
return <h1>LOADING...</h1>
if(status === STATUSES.ERROR)
return <h1>Something went wrong</h1>
console.log(products)
  return (
    <div className='productsWrapper'>
  {
  products?.map((data)=>
    <div className='card' key={data.id}>
    <img src={data?.image} alt="No image found"/>
    <h4>{data?.title}</h4>
    <h4>{data?.price}</h4>
    <button className='btn' onClick={()=>handleAdd(data)}>Add to cart</button>
    </div>
  )
  }
    </div>
  )
}

export default Products