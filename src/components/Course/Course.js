import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Course.css'
const Course = (props) => {
    // console.log(props)
    const {subject, tutor, proffession, gender, age, img, email, price }=props.course;
    return (
        <div className="course">

            <img src={img} alt="" />
            <h3>Subject:{subject}</h3>
            <h4>Tutor: {tutor}</h4>
            <p>Profession: {proffession}</p>
            <p>Email: {email}</p>
            <p>Price: ${price}</p>
            <button className="buy-btn" onClick={()=>props.handleOrder(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> buy Now</button>
            
        </div>
    );
};

export default Course;