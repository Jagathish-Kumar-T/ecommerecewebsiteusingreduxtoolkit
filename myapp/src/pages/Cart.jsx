import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Slice";
const Cart = () => {
    const product = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleRemove=(id)=>{
      dispatch(remove(id))
    }
    console.log("p",product)
    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {
                    product.map((data) =>
                        <div className='cartCard'>
                            <img src={data?.image} alt="No image found" />
                            <h4>{data?.title}</h4>
                            <h4>{data?.price}</h4>
                            <button className='btn' onClick={()=>handleRemove(data.id)}>Remove</button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Cart