import React from 'react';
import './Course.css'
const Course = (props) => {
    // console.log(props)
    const {subject, tutor, proffession, gender, age, img,email, price }=props.course;
    return (
        <div className="course">
            <img src="" alt="" />
            <h3>Subject:{subject}</h3>
            <h4>Tutor: {tutor}</h4>
            <p>age: {age}</p>
            <p>Email: {email}</p>
            <p>Price: {price}</p>
            <button onClick={()=>props.handleOrder(props.course)}>buy Now</button>
            
        </div>
    );
};

export default Course;