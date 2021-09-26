import React from 'react';
import './OrderSummary.css'
const OrderSummary = (props) => {
    console.log(props.orders)
    let total=0;
   if(props.orders.length){
    for(const id of props.orders){
        total=total+id.price
    }
   }
    return (
        <div className="order-summary">
            <h1>Order Summary</h1>
            <h3>Total Order: {props.orders.length}</h3>
            <h3>Total price: ${total}</h3>
           <div className="tutor-info-container">
           {
                props.orders.map(order=><div className="order-info">
                <p>Name: {order.tutor}</p>
                <p>Subject:{order.subject}</p>
                </div>)
                
            }
           </div>

        </div>
    );
};

export default OrderSummary;