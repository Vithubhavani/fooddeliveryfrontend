import { useState,useEffect } from "react"
import styles from './LoginPage.module.css'
import LoginForm from '../Form/LoginForm'
import ValidateLogin from '../Validate/LoginValidate'
import { useNavigate } from "react-router-dom"
import { login } from "../services/services"
import right from '../assets/left.png'
import logo from '../assets/logo.png'
import FooterPage from "./FooterPage"


export default function LoginPage() {
  const navigate=useNavigate()

  const token = localStorage.getItem("token");
  if (token) {
      navigate("/home");
  }
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState()

  

  const submitHandle=async(e)=>{
  e.preventDefault()
  const{valid,invalid}= ValidateLogin(email,password)
  if(!valid){
setError({...invalid})
return
  }

  setError(null)

  const data = {
    email: email,
    password: password
};

  try{
    const res=await login(data)
    if(res.status===200){
      console.log('Logged in successfully:', res.data);
      alert("Logged in successfully")
      const token = res.data.token;
    
      localStorage.setItem("token", token);
     
      navigate('/home')

    }
    else{
      alert("Something went wrong");
    }

  }
  catch(e){
     if (e.response.status === 400) {
          alert("Invalid email or password");
            }
  }
  }

  return (
    <div className={styles.container}>
     
     
      <div className={styles.lr}>
      <div className={styles.left}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.p1}>Welcome Back 👋</div>
        <div className={styles.p2}>Today is a new day. It's your day. You shape it. Sign in to start ordering.</div>
     <LoginForm
   
     email={email}
     setEmail={setEmail}
     password={password}
     setPassword={setPassword}
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


