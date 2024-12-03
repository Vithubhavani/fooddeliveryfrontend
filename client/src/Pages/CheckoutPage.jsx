import { useEffect, useState } from "react";
import styles from './CheckouPage.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import NavbarPage from "./NavbarPage";
import { getAddressId } from "../services/address";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import Mcdonald from '../assets/Mc donalds.png'
import papajohn from '../assets/Papa johns.png'
import kfc from '../assets/KFC.png'
import texas from '../assets/Texas.png'
import burger from '../assets/Burger King.png'
import shaurma from '../assets/Shaurma.png'
import FooterPage from "./FooterPage";

export default function CheckoutPage() {

const navigate=useNavigate()

const{id:addressId}=useParams()

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("userCart");
        return savedCart ? JSON.parse(savedCart) : [];
      });
      const[address,setAddress]=useState(null)


      const sanitizePrice = (value) =>
        isNaN(parseFloat(value.replace(/[^0-9.]/g, "")))
          ? 0
          : parseFloat(value.replace(/[^0-9.]/g, ""));
      
      
      const totalPrice = cart.reduce(
        (sum, item) => sum + sanitizePrice(item.price) * item.quantity,
        0
      );

      const FinalePrice=totalPrice+10;


      const addAddress=()=>{
        const token=localStorage.getItem('token')

        if(token){
          navigate('/toaddress')
        }
        
      }

      const gotoPayment=()=>{
        navigate('/payment',{state:{totalPrice:FinalePrice}})
      }

      const getSelectedAddress=async ()=>{
        if(!addressId) return;
        try{
          const res=await getAddressId(addressId);
          setAddress(res.data)
        }catch(error){
          console.log("Error fetching address",error)
        }
      }

      useEffect(()=>{
        if(addressId) getSelectedAddress()
      },[addressId])

      const truncateAddress = (address) => {
        if (!address) return "";
        const maxLength = 50; 
        return address.length > maxLength ? `${address.substring(0, maxLength)}...` : address;
      };
      
  return (
    <div>
      <NavbarPage/>
      <div className={styles.container}>
        
          <h3 className={styles.heading}> <FaArrowLeft />Your Order Details</h3>
          <div className={styles.foodsorder}>
          <ul className={styles.checkfood}>
            {cart.map((item) => (
              <li key={item._id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.foodImage} />
                <div className={styles.itemDetails}>
                  <h4>{item.name}</h4>
                  <p>{item.quantity}X item</p>
                </div>
                <p className={styles.price}>{item.price}</p>
              </li>
            ))}
            <p className={styles.notetext}>Notes</p>
             <input type="text" placeholder="Add order notes" className={styles.note}/>
          </ul>
         
          <div className={styles.addingAddress}>
        
          <div onClick={addAddress} className={styles.displayAddress}>  <IoLocation size={35} color="#FC8A06" style={{border:"1px solid black",borderRadius:"100px",padding:"3px"}}/>
          <div>
            <p className={styles.adddel}>Delivery Address</p>
            {address?(
            <div className={styles.fullAddress}>
            <p>{truncateAddress(address.fullAddress)}</p>
      

          </div>):(<p style={{fontSize:"13px",color:"gray",marginLeft:"30px"}}>no address selected</p>)}
          </div><IoIosArrowForward size={16} color="#FC8A06" style={{marginLeft:"130px"}}/>
          </div>
          <div className={styles.subandSale}>  <p><span>Items</span>₹{totalPrice.toFixed(2)}</p>
          <p><span>sales tax</span>₹10</p> </div>
        
          <h3 className={styles.subtotal}><span>Subtotal</span> ₹{FinalePrice.toFixed(2)}</h3>
          <button className={styles.placeOrderButton} onClick={gotoPayment}>Choose Payment Method</button>
          </div>
          </div>
          <div className={styles.lastrest}>
            <h2 className={styles.headline}>Similar Restaurants</h2>
            <div className={styles.allrest}>
            <div className={styles.mc}>
    <img src={Mcdonald} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>McDonald’s London</p>
    </div>

    <div className={styles.mc}>
      <img src={papajohn} alt="" className={styles.mcIm}/>
      <p className={styles.mcp}>Papa Johns</p>
    </div>
   
   <div className={styles.mc}>
    <img src={kfc} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>KFC West London</p>
   </div>

   <div className={styles.mc}>
    <img src={texas} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>Texas Chicken</p>
   </div>

   <div className={styles.mc}>
    <img src={burger} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>Burger King</p>
   </div>

   <div className={styles.mc}>
    <img src={shaurma} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>Shaurma 1</p>
   </div>
            </div>
          </div>
        </div>
<FooterPage/>
    </div>
  )
}
