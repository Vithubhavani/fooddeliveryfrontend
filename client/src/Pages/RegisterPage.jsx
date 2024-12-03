import { useState } from "react"
import styles from './RegisterPage.module.css'
import Form from '../Form/RegisterForm'
import ValidateForm from "../Validate/RegisterValidate"
import { useNavigate } from "react-router-dom"
import { register } from "../services/services"
import right from '../assets/left.png'
import logo from '../assets/logo.png'
import FooterPage from "./FooterPage"



export default function RegisterPage() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[PhoneNumber,setPhoneNumber]=useState('')
  const[error,setError]=useState()
  const navigate=useNavigate()

  const submitHandle=async(e)=>{
  e.preventDefault()
  const{valid,invalid}=ValidateForm(name,email,password,PhoneNumber)
  if(!valid){
setError({...invalid})
return
  }

  setError(null)

  const data={
    name,
    email,
    password,
    PhoneNumber
  }

  try{
    const res=await register(data)
    if(res.status===201){
      console.log('Registration successful:', res.data);
      alert("Registration successful")
      const userName=res.data.name;
      localStorage.setItem("name", userName);
      navigate("/login")
    }

  }
  catch(error){
    console.error('Error during registration:', error);
     alert("Error during registration")
  }

  }


  

  return (
    <div className={styles.container}>
      <div className={styles.lr}>
      <div className={styles.left}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.p1}>Welcome Back 👋</div>
        <div className={styles.p2}>Today is a new day. It's your day. You shape it. Sign in to start ordering.</div>
     <Form
     name={name}
     setName={setName}
     email={email}
     setEmail={setEmail}
     password={password}
     setPassword={setPassword}
     PhoneNumber={PhoneNumber}
     setPhoneNumber={setPhoneNumber}
     error={error}
     setError={setError}
     submitHandle={submitHandle}
     />
      </div>
      
      <div className={styles.right}>
        <img src={right} alt="" className={styles.rightimg} />

        </div>
  
  </div>     
<FooterPage/>
</div> 
      
   
  )
}
