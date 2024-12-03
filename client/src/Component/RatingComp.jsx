import React, { useEffect, useState } from 'react'
import { getRate } from '../services/rate'
import styles from './RatingComp.module.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import rateIm from '../assets/rateIm.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function RatingComp() {
    const[rate,setRate]=useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const getRating=async()=>{
        try{
            const res=await getRate();
            setRate(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getRating()
    },[])

    const handleNext = () => {
        if (currentIndex + 3 < rate.length) {
          setCurrentIndex(currentIndex + 3);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex - 3 >= 0) {
          setCurrentIndex(currentIndex - 3);
        }
      };


      const formatDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
    
        const daySuffix = (day) => {
          if (day % 10 === 1 && day !== 11) return 'st';
          if (day % 10 === 2 && day !== 12) return 'nd';
          if (day % 10 === 3 && day !== 13) return 'rd';
          return 'th';
        };
    
        return `${day}${daySuffix(day)} ${month} ${year}`;
      };
      
   
     

  return (
    <div className={styles.container}>
        <h1 className={styles.headline}>Customer Reviews</h1>
        <div className={styles.navigation}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={styles.arrow}
        >
         <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= rate.length}
          className={styles.arrow}
        >
        <FaChevronRight />
        </button>
        </div>
        <div className={styles.subcontainer}>
    
       
      {rate.slice(currentIndex, currentIndex + 3).map((rate)=>(
        <div key={rate._id} className={styles.rates}>
           
            <div className={styles.ratehead}>
            <div className={styles.ratehead1}>
            <img src={rateIm} alt="" />
            <div>
            <div className={styles.name}>{rate.name}</div>
            <div className={styles.count}>{rate.country}</div>
            </div>
            </div>
           <div>
           <MdOutlineStarPurple500 color='#FC8A06'/><MdOutlineStarPurple500 color='#FC8A06'/><MdOutlineStarPurple500 color='#FC8A06'/><MdOutlineStarPurple500 color='#FC8A06'/><MdOutlineStarPurple500 color='#FC8A06'/>
           <div> <LuClock9  color='#FC8A06'/> {formatDate()}</div>
           </div>
           </div>
            <div className={styles.desc}>{rate.description}</div>
          </div>
            
        
      ))}
    </div>
    </div>
  )
}
