import styles from './NavbarPage.module.css'
import logo from '../assets/logo.png'
import { GiStarFormation } from "react-icons/gi";
import { TbBasketCheck } from "react-icons/tb";
import { FaCircleArrowDown } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { getProfileData } from '../services/profile';
import { useNavigate } from 'react-router-dom';
export default function NavbarPage({openCart}) {
const[name,setName]=useState('')

const navigate=useNavigate()
const isloggedin=localStorage.getItem('token')
const fatchName=async()=>{

  try{
    if(isloggedin){
    const res=await getProfileData();
    setName(res.data.name)
    console.log(res.data.name)
    }
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{

  fatchName()

},[isloggedin])
  
const gotoProfile=()=>{
  navigate('/profile')
}

  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <div className={styles.p1}>
         <GiStarFormation color='gold' size={25}/>
          <p>Get 5% Off your first order,<Link className={styles.link1}>Promo: ORDER5</Link> </p>
        </div>
        <div className={styles.p2}>
          <MdLocationPin size={25}  />
        <p>Regent Street, A4, A4201, London</p><Link className={styles.link2}>Change Location</Link>
        </div>
        <div onClick={openCart} className={styles.p3}><TbBasketCheck size={35}/><p style={{marginLeft:'10px',fontSize:'13px',marginRight:'90px',marginTop:'7px',cursor:"pointer"}}>My Cart</p><FaCircleArrowDown size={25} /></div>
      </div>
     
      <div className={styles.part2}>
      <img src={logo} alt="" className={styles.logo}/>
      <Link className={styles.namesh}>Home</Link> 
      <Link className={styles.names}>Browse Menu</Link> 
      <Link className={styles.names}>Special Offers</Link> 
      <Link className={styles.names}>Restaurants</Link> 
      <Link className={styles.names}>Track Order</Link>
      {isloggedin ?(
        <div onClick={()=>gotoProfile()} className={styles.login}> <HiUserCircle size={25} color='orange'/> Hey {name}</div>
      ):(<Link to={'/login'} className={styles.login}> <HiUserCircle size={25} color='orange'/>login/signup</Link>)}
      </div>
    </div>
  )
}
