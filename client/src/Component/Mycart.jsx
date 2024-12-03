import styles from './Mycart.module.css'
import { useNavigate } from 'react-router-dom'
import { BsShare } from "react-icons/bs";
import { TbBasketCheck } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { PiStorefrontBold } from "react-icons/pi";



export default function Mycart({cart,removeFromCart}) {
 const navigate=useNavigate()

 const sanitizePrice = (value) =>
  isNaN(parseFloat(value.replace(/[^0-9.]/g, "")))
    ? 0
    : parseFloat(value.replace(/[^0-9.]/g, ""));


const totalPrice = cart.reduce(
  (sum, item) => sum + sanitizePrice(item.price) * item.quantity,
  0
);

const serializeCart = (cart) => {
 
  return encodeURIComponent(JSON.stringify(cart));
};


const copyCartLink = () => {
  const cartData = serializeCart(cart);
  const cartLink = `${window.location.origin}/cart?data=${cartData}`;
  navigator.clipboard.writeText(cartLink) 
    .then(() => {
      alert('Cart link copied to clipboard!');
    })
    .catch(err => {
      console.error('Error copying link: ', err);
    });
};

  const checkout=()=>{
    const token=localStorage.getItem('token')
    if(token){
      navigate('/checkout')
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.share}>
        <div className={styles.share1}> <BsShare size={30} /><p>Share this cart with your friends</p></div>
      <button onClick={copyCartLink} className={styles.copy}>copy link</button>
      </div>

      <ul>
        <div className={styles.mybasket}><TbBasketCheck size={56}/><h2>My Basket</h2></div>
      {cart.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <div className={styles.quantity}><p>{item.quantity}X</p></div>
              <div>
              <p className={styles.price}>{item.price}</p>
                <h4 className={styles.iname}>{item.name}</h4>
              <p className={styles.extras}>{item.extras.join(', ')}</p>
  
              </div>
              <button className={styles.delete} onClick={()=>removeFromCart(item._id)}><MdDeleteForever size={35} color='red' style={{border:'none'}}/></button>     
          </li>
      ))}
  </ul>
  <div className={styles.fees}>
    <div className={styles.sub}> <span>Sub Total:</span>{totalPrice.toFixed(2)}</div>
    <div className={styles.discount}><span>Discounts:</span>-₹3.00</div>
    <div className={styles.delivery}><span>Delivery Fee:</span>₹3.00</div>
  </div>

  <div className={styles.total}> 
     <h3><span>Total to pay: </span>₹{totalPrice.toFixed(2)}</h3>
     <p>Choose your free item..<IoArrowDownCircleSharp size={30} color='gray'/></p>
     <p>Apply Coupon Code here <IoArrowForwardCircle size={30} color='green'/></p>
     </div>

     <div className={styles.checkout}>
     <div className={styles.time}>
      <div className={styles.collection}><MdDeliveryDining size={35} color='green'/><p>Delivery Starts at 17:50</p></div>
      <div className={styles.collection1}><PiStorefrontBold size={35} color='green' /><p>Collection Starts at 16:50</p></div>
      
     </div>
     <button className={styles.check} onClick={checkout}><IoArrowForwardCircle size={35} color='white'/> Checkout!</button>
     </div>



   
    </div>
  )
}
