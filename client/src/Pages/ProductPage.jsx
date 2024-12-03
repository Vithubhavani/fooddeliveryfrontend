import React, { useEffect, useState } from 'react'
import styles from './ProductPage.module.css'
import burg from  '../assets/burg.png'
import freeIce from '../assets/free ice.png'
import firstorder from '../assets/firstorder.png'
import vegan from '../assets/vegan.png'
import NavbarPage from './NavbarPage'
import { TbChecklist } from "react-icons/tb";
import burgerback from '../assets/burgerback.png'
import { FaMotorcycle } from "react-icons/fa6";
import starrate from '../assets/starrate.png'
import { GoClockFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { getFoodItems,searchFood,getVariety } from '../services/restaurant'
import { FaCirclePlus } from "react-icons/fa6";
import { RiPassValidLine } from "react-icons/ri";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import Mymap from '../Component/Mymap'
import McDonald from '../assets/Mc donalds.png'
import papajohn from '../assets/Papa johns.png'
import kfc from '../assets/KFC.png'
import texas from '../assets/Texas.png'
import burgerking from '../assets/Burger King.png'
import shaurma from '../assets/Shaurma.png'
import FooterPage from './FooterPage'
import Mycart from '../Component/Mycart'
import RatingComp from '../Component/RatingComp'




export default function ProductPage() {
 const [foods,setFoods]=useState([]);
 const[loading,setLoading]=useState(false);
 const [activeCategory, setActiveCategory] = useState("");
 const[isCartvisible,setIsCartvisible]=useState(false)

 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("userCart");
  return savedCart ? JSON.parse(savedCart) : [];
});


useEffect(() => {
  localStorage.setItem("userCart", JSON.stringify(cart));
}, [cart]);


const addToCart = (varietyId) => {
  const selectedVariety = foods
    .flatMap((food) => food.varieties)
    .find((variety) => variety._id === varietyId);

  if (selectedVariety) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item._id === selectedVariety._id
      );

      if (existingItem) {
     
        return prevCart.map((item) =>
          item._id === selectedVariety._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...selectedVariety, quantity: 1 }];
      }
    });

    alert(`${selectedVariety.name} has been added to your cart.`);
  } else {
    console.error("Variety not found!");
  }

  setIsCartvisible(true);
};

const removeFromCart = (varietyId) => {
  setCart((prevCart) => prevCart.filter((item) => item._id !== varietyId));
};


 const loadFoods=async()=>{
  setLoading(true);
  const response=await getFoodItems();
  setFoods(response.data);
  setLoading(false);

 }

 useEffect(()=>{
  loadFoods();
 },[]);

 const[search,setSearch]=useState("")
 const handleSearch=()=>{
  searchFood(search).then(res=>setFoods(res.data));
 }

 const clearSearch=()=>{
  setSearch('');
  loadFoods();
 }

 const loadSelectedFoods = async (category) => {
  setLoading(true);
  try {
    const response = await searchFood(category); 
    setFoods(response.data);
    setLoading(false);
    setActiveCategory(category);
  } catch (error) {
    console.error("Error fetching selected foods:", error);
    setLoading(false);
  }
};


const openCart=()=>{
  setIsCartvisible(true)
}


  return (
    <div className={styles.container} >
      <NavbarPage openCart={openCart}/>
      <div className={styles.part1}> 
        <div className={styles.subpart}>
        <div className={styles.left1} >
          <h4>I'm lovin' it!</h4>
          <h1>McDonald’s East London</h1>
          <div className={styles.notes}>
          <div className={styles.note}> <TbChecklist size={30} style={{marginRight:'6px'}}/>Minimum Order: 12 GBP</div>
          <div className={styles.note}><FaMotorcycle size={30} style={{marginRight:'6px'}}/>Delivery in 20-25 Minutes</div>
          </div>
        </div>
        <div className={styles.right1}>
        <img src={starrate} alt="" className={styles.rating}/>
         <img src={burg} alt="" className={styles.burg}/> 
         </div>
         </div>
         <div className={styles.opening}><GoClockFill size={20}/>Open until 3:00 AM</div>
        </div>
        
        <div className={styles.part2}>
          <div className={styles.listitem}>
          <h2>All Offers from McDonald’s East London</h2>
          <div className={styles.searchbar}> <IoIosSearch style={{position:"absolute",zIndex:"2",marginLeft:"170px",marginTop:"8px"}}/> <input value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder='Search from menu...' className={styles.search}/> 
          <button onClick={handleSearch} className={styles.searchbar1}>Search</button>
          <button onClick={clearSearch} className={styles.searchbar1}>clear</button>
          </div>
          </div>
         
            <ul className={styles.list}>
              <li className={styles.list1} onClick={loadFoods}>Offers</li>
              <li className={`${styles.list1} ${activeCategory === "Burgers" ? styles.activeCategory : ""}`} onClick={()=>loadSelectedFoods("Burgers")}>Burgers</li>
              <li className={`${styles.list1} ${activeCategory === "Fries" ? styles.activeCategory : ""}`} onClick={()=>loadSelectedFoods("Fries")}>Fries</li>
              <li className={styles.list1} onClick={loadFoods}>Snacks</li>
              <li className={styles.list1} onClick={loadFoods}>Salads</li>
              <li className={`${styles.list1} ${activeCategory === "Cool Drinks" ? styles.activeCategory : ""}`} onClick={()=>loadSelectedFoods("Cool Drinks")}>Cold Drinks</li>
              <li className={styles.list1} onClick={loadFoods}>Happy Meal</li>
              <li className={styles.list1} onClick={loadFoods}>Desserts</li>
              <li className={styles.list1} onClick={loadFoods}>Hot drinks</li>
              <li className={styles.list1} onClick={loadFoods}>Sauces</li>
              <li className={styles.list1} onClick={loadFoods}>Orbit</li>
            </ul>
        </div>

    <div className={styles.part3}>
      <img src={firstorder} alt="" className={styles.offer}/>
      <img src={vegan} alt="" className={styles.offer}/>
      <img src={freeIce} alt="" className={styles.offer}/>
    </div>

    <div className={styles.cartwithproduct}>
    <div className={styles.part4}>
    <div className={styles.foodItems}>{foods.map((food)=>(
      <div key={food._id}>
        <h1 className={styles.foodItem}>{food.name}</h1>
        <div className={styles.varieties}>
          {food.varieties.map((variety,index)=>(
            <div key={index} className={styles.foodIteflex}>
              <div className={styles.extrasname}>
                  <h4 >{variety.name}</h4>
                   <p className={styles.extras}>{(variety.extras).join(", ")}</p>

              </div>
              <div className={styles.plusIm}>
              <div className={styles.plus}><FaCirclePlus size={25} onClick={()=>addToCart(variety._id)} /></div>
             <img src={variety.image} alt="" className={styles.foodItemimg}/>
                  </div>
            </div>
          ))}
        </div>
        </div>
    ))}</div>
    </div> 
 {isCartvisible &&
 ( <Mycart cart={cart} removeFromCart={removeFromCart}/>)}

</div>

<div className={styles.part5}>
<div className={styles.cont1}>
<h2> <MdOutlineSpatialTracking /> Delivery information </h2>
<p className={styles.contp}><span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
<p className={styles.contp}> <span>Tuesday:</span> 8:00 AM–3:00 AM </p>
<p className={styles.contp}> <span>Wednesday:</span> 8:00 AM–3:00 AM</p>
<p className={styles.contp}> <span>Thursday:</span> 8:00 AM–3:00 AM</p>
<p className={styles.contp}> <span>Friday:</span> 8:00 AM–3:00 AM </p>
 <p className={styles.contp}><span>Saturday:</span> 8:00 AM–3:00 AM</p>
<p className={styles.contp}><span>Sunday: 8:00</span> AM–12:00 AM</p>
<p className={styles.contp}><span>Estimated time until delivery:</span> 20 min</p>
</div>


<div className={styles.cont1}>
   <h2><RiPassValidLine /> Contact information</h2>
  <p>If you have allergies or other dietary</p> 
  <p>restrictions, please contact the restaurant. The</p> 
  <p>restaurant will provide food-specific</p> 
<p>  information upon request.</p>
<p className={styles.contp2}>Phone number</p>
<p className={styles.number1}>+934443-43</p>
<p className={styles.contp2}>Website http://mcdonalds.uk/</p>

  </div>

<div className={styles.cont3}>
<h2><GiAlarmClock /> Operational Times</h2>
<p className={styles.contp}><span>Monday:</span> 8:00 AM–3:00 AM</p>
<p className={styles.contp}><span>Tuesday:</span> 8:00 AM–3:00 AM </p>
<p className={styles.contp}><span>Wednesday:</span> 8:00 AM–3:00 AM </p>
<p className={styles.contp}><span>Thursday:</span> 8:00 AM–3:00 AM  </p>
<p className={styles.contp}><span>Friday:</span> 8:00 AM–3:00 AM </p>
<p className={styles.contp}><span>Saturday:</span> 8:00 AM–3:00 AM </p>
<p className={styles.contp}><span>Sunday:</span> 8:00 AM–3:00 AM</p>
</div>
</div>

<div className={styles.part6}>

<div className={styles.mymapcont}>
  <h3>McDonald’s </h3>
  <p className={styles.mymapp3}>South London</p>
  <p className={styles.mymapp4}>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
<p className={styles.mymapp1}>Phone number</p>
<p className={styles.mymapp2}>+934443-43</p>
<p className={styles.mymapp1}>Website</p>
<p className={styles.mymapp2}>http://mcdonalds.uk/</p>

  </div>
  <div className={styles.mymap}><Mymap/></div>
  </div>

<div className={styles.part7}>

  <RatingComp/>
  
</div>

<div className={styles.part8}>

  <h4>Similar Restaurants</h4>
  <div className={styles.parts}>
    <div className={styles.mc}>
    <img src={McDonald} alt="" className={styles.mcIm}/>
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
    <img src={burgerking} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>Burger King</p>
   </div>

   <div className={styles.mc}>
    <img src={shaurma} alt="" className={styles.mcIm}/>
    <p className={styles.mcp}>Shaurma 1</p>
   </div>
  </div>
</div>

<FooterPage/>

</div>
  )
}
