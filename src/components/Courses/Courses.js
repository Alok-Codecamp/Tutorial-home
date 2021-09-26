import React, { useEffect, useState } from 'react';
import './Courses.css'
import Course from '../Course/Course';
import OrderSummary from '../OrderSummary/OrderSummary';

const Courses = () => {
    const [courses,setCourses]=useState([]);
    // use state for orderd course 
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('./courseInfo.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    // event handler for buy  button 
    const handleOrder=(course)=>{
        // console.log(course)
        const newOrders=[...orders,course]
        setOrders(newOrders)
        
    }
    return (
        <div className='all-course'>
            <div className="courses">
            {
                courses.map(course=><Course
                key={course.id}
                course={course}
                handleOrder={handleOrder}
                ></Course>)
            }
            </div>
            <div className="order-summary">
            <OrderSummary orders={orders}></OrderSummary>
            </div>
        </div>
    );
};

export default Courses;