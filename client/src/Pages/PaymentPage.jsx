import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { FaWallet } from "react-icons/fa";
import styles from './PaymentPage.module.css'
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";
import { TbSquareRoundedLetterSFilled } from "react-icons/tb";
import { TbSquareRoundedLetterPFilled } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa6";
import NavbarPage from './NavbarPage';
import FooterPage from './FooterPage';

export default function PaymentPage() {

   
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const location=useLocation();
  const {totalPrice}=location.state || {}

  const paymentMethods = [
    { id: 1, name: 'MaestroKard',icon:<TbSquareRoundedLetterMFilled  size={20} color='#FC8A06'  style={{backgroundColor:"#FFEDD8",height:"30px",width:"30px",padding:"5px",borderRadius:"100px"}}/> },
    { id: 2, name: 'Stripe',icon:<TbSquareRoundedLetterSFilled  size={20} color='#FC8A06'  style={{backgroundColor:"#FFEDD8",height:"30px",width:"30px",padding:"5px",borderRadius:"100px"}}/>},
    { id: 3, name: 'PayPal',icon:<TbSquareRoundedLetterPFilled  size={20} color='#FC8A06'  style={{backgroundColor:"#FFEDD8",height:"30px",width:"30px",padding:"5px",borderRadius:"100px"}}/>},
  ];

  const handlePaymentSelection = (e) => {
    setSelectedPaymentMethod(e.target.value); 
    setIsButtonDisabled(false); 
  };

  
  const handleProceedPayment = () => {
    if (selectedPaymentMethod) {
        
     navigate('/paysuccess'); 
    }
  };

  return (
    <div>
      <NavbarPage/>
      <h2 className={styles.headline}><FaArrowLeft />Choose and Pay</h2>
      <div className={styles.container}>
        <div className={styles.firstpart}>
     <div className={styles.wallet}><p className={styles.p1}><FaWallet size={20} color='#FC8A06'  style={{backgroundColor:"#FFEDD8",height:"35px",width:"35px",padding:"10px",borderRadius:"10px"}}/> Wallet</p> <p className={styles.p2}>Available balance: ₹300</p></div> 

      <div>
        {paymentMethods.map((method) => (
          <div key={method.id} >
            <label className={styles.radio}>
              <div className={styles.flexing}>
              <span>{method.icon}</span>
              <span style={{ marginLeft: '8px' }}>
              {method.name}
              </span>
              </div>
          
              <input
                type="radio"
                name="paymentMethod"
                value={method.name}
                onChange={handlePaymentSelection}
                checked={selectedPaymentMethod === method.name}
              />
          
            </label>
          </div>
        ))}
      </div>
      <div className={styles.debit}>+ Add Debit Card</div>
      </div>


      <div className={styles.secondpart}>
      <p><span>Amount To be paid: </span>₹{totalPrice?.toFixed(2)}</p>
      <button className={styles.proceed}
        onClick={handleProceedPayment}
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? 'gray' : '#FC8A06',
          cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        Proceed Payment
      </button>
      </div>
    </div>
    <FooterPage/>
    </div>
  );
}
