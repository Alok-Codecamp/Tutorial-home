import React from 'react';

const OrderSummary = (props) => {
    console.log(props.orders)
    let total=0;
   if(props.orders.length){
    for(const id of props.orders){
        total=total+id.price
    }
   }
    return (
        <div>
            <h1>this is order Summary</h1>
            <h3>Total Order: {props.orders.length}</h3>
            <h3>Total price: {total}</h3>
            {
                props.orders.map(order=><div>
                <p>Name: {order.tutor}</p>
                <p>Subject:{order.subject}</p>
                </div>)
                
            }

        </div>
    );
};

export default OrderSummary;