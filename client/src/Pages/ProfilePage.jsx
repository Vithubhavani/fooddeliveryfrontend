import { useEffect, useState } from "react"
import { getProfileData, updateProfile } from "../services/profile"
import { getPaymentMethods,postPayment,editPayment,deletePayment } from "../services/payment"
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PaymentMethod from '../Component/PaymentMethod'
import styles from "./ProfilePage.module.css"
import NavbarPage from './NavbarPage'
import { FaArrowLeft } from "react-icons/fa6";
import prof from '../assets/prof.png'
import FooterPage from './FooterPage'
import { FiCreditCard } from "react-icons/fi";


export default function ProfilePage() {


    const[name,setName]=useState('')


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

    const navigate=useNavigate()
    const[profile,setProfile]=useState({
        name:'',
        email:'',
        gender:'Mail',
        country:'Country'
    })

    const[isEditing,setEditing]=useState(false)
    const[error,setError]=useState(null)

    const getProfile=async()=>{
        try{ const res=await getProfileData()
            setProfile(res.data)
        } catch(error){
            console.log(error)
            setError("Failed to fetch profile")
        }
       
    }

    useEffect(()=>{
        getProfile()
    },[])

    const handleChange=(e)=>{
        const{name,value}=e.target
        setProfile({...profile,[name]:value})   
    }

    const handleEdit=async()=>{
        
        try{
            await updateProfile(profile)
            setEditing(false)
            alert('Successfully added the data')
        } catch(error){
            console.log(error)
            setError("Failed to update profile")
        }
    }

    const[paymentMethod,setPaymentMethod]=useState([])
    const[loading,setLoading]=useState(false)

    const [selectedPayment, setSelectedPayment] = useState(null);

    const getPayment=async()=>{
      
        try{
            const res=await getPaymentMethods()
            setPaymentMethod(res.data)
          
        } catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        getPayment()
    },[])


    const handleEditClick = (payment) => {
        setSelectedPayment(payment);
      };
    
      const handleFormSubmit = async (updatedPayment) => {
        try {
          await editPayment(selectedPayment._id, updatedPayment);
       await  getPayment();
          setSelectedPayment(null); 
        } catch (error) {
          console.error("Error updating payment:", error);
        }
      };
    
      const handleDelete = async () => {
        try {
          await deletePayment(selectedPayment._id);
          setPaymentMethod((prev) => prev.filter((payment) => payment._id !== selectedPayment._id));
          setSelectedPayment(null); 
        } catch (error) {
          console.error("Error deleting payment:", error);
        }
      };

      const handleCancel = () => {
        setSelectedPayment(null); 
      };

  return (

    <div>
        <NavbarPage/>
        <h3 className={styles.headline}><FaArrowLeft /> My Profile</h3>
    
  
    
    <div className={styles.container}>
      {error&&<p style={{color:"red"}}>{error}</p>}

<div className={styles.profbt}>
      <div className={styles.profile}>
        
        <img src={prof} alt="" />
        <p className={styles.username}>{name}</p>
    </div>

        <div>
            {isEditing?(
                <button className={styles.edit} onClick={handleEdit}>Save</button>
            ):(<button className={styles.edit} onClick={()=>setEditing(true)}>Edit</button>)}
        </div>
        </div>

<div className={styles.subcont}>
        <div className={styles.inputcont}>
            <label>Name:</label>
            {isEditing?(
            <input
             type="text" 
             name="name" 
             value={profile.name} 
             className={styles.name}
             onChange={handleChange}/>
             ):(<p>{profile.name}</p>)}
        </div>

        <div className={styles.inputcont}>
            <label>Email</label>
            {isEditing?(
                <input 
                type="text" 
                name="email" 
                value={profile.email} 
                className={styles.name}
                onChange={handleChange}/>
            ):(<p>{profile.email}</p>)}      
        </div>

        <div className={styles.inputcont}>
            <label className={styles.label}> Gender</label>
            {isEditing?(
               <input
                type="text"
                name="gender"
                value={profile.gender}
                className={styles.name}
                onChange={handleChange} /> 
            ):(<p>{profile.gender}</p>)}
        </div>

        <div className={styles.inputcont}>
            <label className={styles.label}>Country</label>
            {isEditing?(
                <input 
                type="text" 
                name="country"
                value={profile.country}
                className={styles.name}
                onChange={handleChange}/>
            ):(<p>{profile.country}</p>)}
        </div>

        </div>

         <div style={{display:"flex"}}>
        <div  className={styles.paymentmethod}>
       {loading?(<p>loading..</p>):(paymentMethod.map((item)=>(
       <div key={item._id} className={styles.paymentcard}>
     
        <div className={styles.number}>
        <FiCreditCard color="#FC8A06"/>
        <p className={styles.cardnumber}>{item.cardNumber}</p>
        
        <div style={{cursor:"pointer"}} onClick={()=>handleEditClick(item)}><FiEdit3 size={14}/></div>
        </div>
        <div className={styles.cardname}><p>{item.name}</p></div>
       
       </div>   
       )))}
    </div>

    <div className={styles.addcard}>+ Add new card</div>
    </div>

    {selectedPayment && (
<PaymentMethod 
key={selectedPayment._id}
payment={selectedPayment}
onSubmit={handleFormSubmit}
onDelete={handleDelete}
onCancel={handleCancel}
/>
)}
    </div>

    <FooterPage/>
    </div>
  )
}
