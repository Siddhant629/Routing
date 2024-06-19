import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';

const Register = () => {
    const [email,Setemail]=useState();
    const [name,SetName]=useState();
    const [age,SetAge]=useState(15);
    const [successMessage, setSuccessMessage] = useState('');
    const handle =(event)=>{
        event.preventDefault();

        setSuccessMessage('user registerd succesfully');
        

       

        
    }
    const inc =()=>{
        SetAge(age+1);
    }
    const dec =()=>{
        SetAge(age-1);
    }
    useEffect(()=>{
        console.log(age);
     },[age])
  return (
    
    <div>
        <Navbar/>
        <h1>What is your age:
            {age}
            </h1>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
      { age  > 18?(
        <div>
        <input 
        type="email" 
        placeholder='Enter Email' 
        value={email} onChange={(e) => Setemail(e.target.value)}></input>
        <input type="name" placeholder='Enter Name' value={name} onChange={(e) => SetName(e.target.value)}></input>
        <button onClick={handle}>Submit</button>
        {successMessage && <p>{successMessage}</p>}
        </div>
      ) :(<h1>YOur are not allowed</h1>)}
        </div>
  )
}

export default Register