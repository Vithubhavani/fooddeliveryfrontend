import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import NavbarPage from './NavbarPage';
import styles from './PaymentSuccess.module.css'

export default function PaymentSuccess() {

const navigate=useNavigate()

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("userCart");
        return savedCart ? JSON.parse(savedCart) : [];
      });

      const gotoHome=()=>{
         navigate('/home')
      }
  return (
    <div >
      <NavbarPage/>
      <div className={styles.container}>
<FaCircleCheck size={165} color='#32B638'/>
<p className={styles.message}>Order Placed Successfully</p>
<p className={styles.message1}>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
       
       <div className={styles.items}>
        {cart.map((item)=>(
         <div key={item._id}>
            <p>{item.name}</p>
         </div>   
        ))}

        <button onClick={gotoHome} className={styles.btn}>Home Page</button>
        </div>
    </div>
    </div>
  )
}
