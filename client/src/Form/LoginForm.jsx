import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'

export default function Form({
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    submitHandle
  }) 
  {
    return (
      <div className={styles.container}>

      <div className={styles.inputContainer}>
      <p>Email</p>
        <div>
        <input type="email"
        value={email}
        placeholder="Email"
       className={styles.name}
        onChange={(e) => setEmail(e.target.value)}/>
        
         </div>
         <div>
        {error?.email && <p style={{fontSize:'15px',color:"red"}}>Email Required</p>}
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
                <div>
        {error?.password && <p style={{fontSize:'15px',color:"red"}}>Password required </p>}
        </div>
        </div>
        <button onClick={submitHandle} className={styles.register}>Signin</button>
        <div className={styles.flexing}>
        <p className={styles.q}>Have no account yet?</p>
        <Link to={'/register'} className={styles.log}>Sign up</Link>
      </div>
      </div>
    )
  }
  