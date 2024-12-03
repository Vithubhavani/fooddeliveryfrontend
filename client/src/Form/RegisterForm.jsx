import styles from './RegisterForm.module.css'
import { Link } from 'react-router-dom'

export default function RegisterForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  PhoneNumber,
  setPhoneNumber,
  error,
  setError,
  submitHandle
}) 
{
  return (
    <div className={styles.container}>
     
      <div className={styles.inputContainer}>
        <p>Name</p>
        <div>
      <input type="text"
      value={name}
      placeholder="Name" 
      className={styles.name}
      onChange={(e) => setName(e.target.value)}/>
      
      </div>
      <div className={styles.error}>
      {error?.name&&<p style={{fontSize:'15px',color:"red"}}>Name is required</p>}
      </div>
      </div>
    <div className={styles.inputContainer}>
      <p>Email</p>
      <div>
      <input type="email"
      value={email}
      placeholder="Email"
      className={styles.name}
      onChange={(e) => setEmail(e.target.value)}/>
     
      </div>
      <div className={styles.error}>
      {error?.email && <p style={{fontSize:'15px',color:"red"}}>Enter valid email address</p>}
      </div>
      </div>
      <div className={styles.inputContainer}>
        <p>Password</p>
        <div>
      <input type="text"
      value={password}
      placeholder="Password"
      className={styles.name}
      onChange={(e) => setPassword(e.target.value)} />
    
       </div>

       <div className={styles.error}>
      {error?.password.lengths && <p style={{fontSize:'15px',color:"red"}}>Password must be atleast 8 characters long </p>}
      {error?.password.specialChar && <p style={{fontSize:'15px',color:"red"}}>Password must contain atleast one special character</p>}
      {error?.password. Upppercases && <p style={{fontSize:'15px',color:"red"}}>Password must contain atleast one uppercase character</p>}
     </div>
     </div>
     <div className={styles.inputContainer}>
      <p>Phone Number</p>
      <div>
      <input type="text"
      value={PhoneNumber}
      placeholder="Phone Number"
      className={styles.name}
      onChange={(e) => setPhoneNumber(e.target.value)} />
       
       </div>
       <div className={styles.error}>
      {error?.PhoneNumber &&<p style={{fontSize:'15px',color:"red"}}>Password do not match</p>}
      </div>
      </div>
      <p className={styles.forget}>Forgot Password?</p>
      <button onClick={submitHandle} className={styles.register}>Signup</button>

      <div className={styles.flexing}>
      <p className={styles.q}>Have an account?</p>
      <Link to={'/login'} className={styles.log}>Sign in</Link>
    </div>
    </div>
  )
}
