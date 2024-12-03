import React, { useEffect } from 'react'
import NavbarPage from './NavbarPage'
import styles from './HomePage.module.css'
import eatingPizza from '../assets/eating pizza.png'
import pizzagirl from '../assets/pizzagirl.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import logo from '../assets/logo.png'
import { IoMdCheckbox } from "react-icons/io";
import { MdCelebration } from "react-icons/md";
import chefburger from '../assets/chef burger london.png'
import Grand from '../assets/grand AI cafe london.png'
import breakfast from '../assets/Breakfast.png'
import burgers from '../assets/Burgers and fastfood.png'
import pasta from '../assets/pasta and casuals.png'
import pizza from '../assets/Pizza.png'
import salads from '../assets/Saalads.png'
import soups from '../assets/pasta.png'
import mcdonalds from '../assets/Mc donalds.png'
import papajohns from '../assets/Papa johns.png'
import kfc from '../assets/KFC.png'
import texas from '../assets/Texas.png'
import burgerking from '../assets/Burger King.png'
import shaurma from '../assets/Shaurma.png'
import { useNavigate } from 'react-router-dom'
import friends from '../assets/friends.png'
import appstore from '../assets/app-store-badges.png'
import ride from '../assets/Ride.png'
import partner from '../assets/Partner.png'
import place from '../assets/place.png'
import track from '../assets/track.png'
import order from '../assets/order.png'
import FooterPage from './FooterPage'


export default function HomePage() {

  const navigate=useNavigate()
const productPage=()=>{
 
  const token=localStorage.getItem('token')
  if(token){
  navigate('/product')
  }
}



  return (
    <div className={styles.container}>
      <NavbarPage/>
      <div className={styles.part1}>
        <div className={styles.p1}>
        <p style={{fontSize:'14px',fontWeight:'400'}}>Order Restaurant food, takeaway and groceries.</p>
        <p  style={{fontSize:'40px',fontWeight:'600'}}>Feast Your Senses,</p>
        <p style={{fontSize:'40px',fontWeight:'600',color:'#FC8A06'}}>Fast and Fresh</p>
        
        <div>
        <p style={{fontSize:'10px',fontWeight:'600',marginTop:'10px'}}>Enter a postcode to see what we deliver</p>
        <div className={styles.gs}> <span className={styles.gmail}>e.g. EC4R 3TE</span> <span className={styles.subscribe}>Search</span></div>
        </div>

      </div>
     
      <img src={pizzagirl} alt="" className={styles.pizza}/>
      
      <div className={styles.back}>
        
      <img src={eatingPizza} alt="" className={styles.eating}/>
      

      <div className={styles.notifications}>
      <div className={styles.notification1}>
        <img src={one} alt="" className={styles.number}/>
        <div className={styles.ord}>
          <img src={logo} alt="" className={styles.logo}/>
          <p className={styles.ord1}>We’ve Received your order!</p>
          <p className={styles.ord2}>Awaiting Restaurant acceptance</p>
        </div>
        </div>

        <div className={styles.notification2}>
          <img src={two} alt="" className={styles.number}/>
        <div className={styles.ord}>
          <img src={logo} alt="" className={styles.logo}/>
          <p className={styles.ord1}>Order Accepted!  <IoMdCheckbox color='green' /></p>
          <p className={styles.ord2}>Your order will be delivered shortly</p>
        </div>
        </div>
        
        <div className={styles.notification3}>
          <img src={three} alt="" className={styles.number}/>
        <div className={styles.ord}>
          <img src={logo} alt="" className={styles.logo}/>
          <p className={styles.ord1}>Your rider's nearby <MdCelebration color='gold' size={10}/></p>
          <p className={styles.ord2}>They're almost there-get ready</p>
        </div>
        </div>
      </div>
      </div> 
      </div>

      <div className={styles.part2}>
     <div className={styles.off}>Up to -40% 🎊 Order.uk exclusive deals</div>
     <div className={styles.food}>
     <div className={styles.food1}>Vegan</div>
      <div className={styles.food1}>Sushi</div>
      <div className={styles.food2}>Pizza & Fast food</div>
      <div className={styles.food1}>others</div>
      </div>
      </div>

      <div className={styles.part3}>
        <img src={chefburger} alt="" className={styles.chefIm1}/>
      
       <div className={styles.chef}>
        <div className={styles.dis}>-20%</div>
        <img src={Grand} alt="" className={styles.chefIm}/>
        <div className={styles.res}>
        <p className={styles.rest1}>Restaurant</p>
        <p className={styles.rest2}>Grand Ai Cafe London</p>
       </div>
       </div>

        <img src={chefburger} alt="" className={styles.chefIm}/>
     
      </div>



      <div className={styles.part4}>
        <h3>Order.uk Popular Categories 🤩</h3>

        <div className={styles.dishes}>
        <div className={styles.popular}>
          <img src={burgers} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Burgers & Fast food</p>
          <p className={styles.restpop}>21 Restaurants</p>
        </div>

        <div className={styles.popular}>
          <img src={salads} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Salads</p>
          <p className={styles.restpop}>32 Restaurants</p>
        </div>

        <div className={styles.popular}>
          <img src={pasta} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Pasta & Casuals</p>
          <p className={styles.restpop}>4 Restaurants</p>
        </div>

        <div className={styles.popular}>
          <img src={pizza} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Pizza</p>
          <p className={styles.restpop}>32 Restaurants</p>
        </div>

        <div className={styles.popular}>
          <img src={breakfast} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Breakfast</p>
          <p className={styles.restpop}>4 Restaurants</p>
        </div>

        <div className={styles.popular}>
          <img src={soups} alt="" className={styles.PopIm}/>
          <p className={styles.namepop}>Soups</p>
          <p className={styles.restpop}>32 Restaurants</p>
        </div>
        </div>
      </div>
    
    <div className={styles.part5}>
      <h3>Popular Restaurants</h3>
      <div className={styles.restaurants}>
      <div onClick={productPage} className={styles.mc}>
        <img src={mcdonalds} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>McDonald’s London</p>
      </div>

      <div onClick={productPage} className={styles.mc}>
        <img src={papajohns} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>Papa Johns</p>
      </div>

      <div onClick={productPage} className={styles.mc}>
        <img src={kfc} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>KFC West London</p>
      </div>

      <div onClick={productPage} className={styles.mc}>
        <img src={texas} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>Texas Chicken</p>
      </div>

      <div onClick={productPage} className={styles.mc}>
        <img src={burgerking} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>Burger King</p>
      </div>

      <div onClick={productPage} className={styles.mc}>
        <img src={shaurma} alt="" className={styles.mcIm}/>
        <p className={styles.mcp}>Shaurma 1</p>
      </div>
      </div>
    </div>

    <div className={styles.part6}>
    <img src={friends} alt="" className={styles.friends}/>

    <div className={styles.right}>
      <img src={logo} alt="" className={styles.logo1}/> <span>ing is more</span>
      <div className={styles.bot}> <p className={styles.bot1}>Personalised</p> <p className={styles.bot2}>& Instant</p></div>
      <p className={styles.down}>Download the Order.uk app for faster ordering</p>
      <img src={appstore} alt="" className={styles.appstore}/>
    </div>
    </div>
    

    <div className={styles.part7}>
    <img src={partner} alt="" className={styles.partner}/>
    <img src={ride} alt="" className={styles.partner}/>
    </div>

<div className={styles.part8}>
<div className={styles.part81}>
  <ul className={styles.part811}>
    <li className={styles.part812}>Know more about us!</li>
    <li className={styles.part813}>Frequent Questions </li>
    <li className={styles.part814}>Who we are? </li>
    <li className={styles.part814}> Partner Program</li>
    <li className={styles.part814}>Help & Support</li>
  </ul>

<div className={styles.part82}>
  <div className={styles.part821}>
    <h5 className={styles.part823}>How does Order.UK work?</h5>
    <p className={styles.part824}>What payment methods are ?</p>
    <p className={styles.part824}>Can I track my order in real-time?</p>
    <p className={styles.part824}>Are there any special discounts or</p>
    <p className={styles.part824}>promotions available?</p>
    <p className={styles.part824}>Is Order.UK available in my area?</p>
  </div>
 <div className={styles.part83}>
  <div className={styles.part831}>
  <div className={styles.part8311}>
    <h4>Place an Order!</h4>
    <img src={place} alt="" />
    <p>Place order through our</p>
    <p>website or Mobile app</p>
  </div>

  <div className={styles.part8311}>
    <h4>Track Progress</h4>
    <img src={track} alt="" />
    <p>Your can track your order</p>
    <p>status with delivery time</p>
  </div>
  <div className={styles.part8311}>
    <h4>Get your Order!</h4>
    <img src={order} alt="" />
    <p>Receive your order at a</p>
    <p>lighting fast speed!</p>
  </div>
  </div>
  <div className={styles.part832}>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</div>
 </div>
</div>
</div>
</div>
  

  <div className={styles.part9}>
    <div className={styles.part91}>546+ <span>Registered Riders</span></div>
    <div className={styles.part91}>789,900+ <span>Orders Delivered</span></div>
    <div className={styles.part91}>690+ <span> Restaurants Partnered</span></div>
    <div className={styles.part91}>17,457+ <span>Food items</span></div>

  </div>

<FooterPage/>
    </div>
  )
}
