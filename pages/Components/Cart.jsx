import React from 'react'
import { connect } from 'react-redux';
import {useSelector} from 'react-redux'
function Cart({cartItems}){

    const cartitemlist = useSelector((state)=>state.cart.itemsList)
  return (
    <>
    <div>
        
        {
            cartitemlist.length > 0 ? (cartItems.map((item)=>{
                <div className='text-black' key={item.id}>
                  
                    <span>{item.price}</span>
                    <div className="flex items-center justify-between">
                    <button className="font-bold text-2xl  ">+</button>
                    <span>{item.quantity}</span>
                    <button className="font-bold text-2xl">-</button>
                    </div>

                </div>
            })): <div>Empty cart</div>
        }
    </div>
      
    </>
  )
}

const mapStateToProps = ({cart})=>{
    const {totalQuantity,itemsList} = cart
    return {
      qty : totalQuantity,
      cartItems:itemsList
    }
}

export default connect(mapStateToProps)(Cart)
