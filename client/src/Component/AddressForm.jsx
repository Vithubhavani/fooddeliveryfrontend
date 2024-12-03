import { useEffect, useState} from "react"
import styles from './AddressForm.module.css'
import { IoLocation } from "react-icons/io5";



export default function AddressForm({onSave,editAddress}) {
 
  const[State,setState]=useState('')
  const[City,setCity]=useState('')
  const[pincode,setPincode]=useState('')
  const[PhoneNumber,setPhoneNumber]=useState('')
  const[fullAddress,setFullAddress]=useState('')
  const[error,setError]=useState({})

  useEffect(()=>{
    if(editAddress){
        setState(editAddress.State);
        setCity(editAddress.City);
        setPincode(editAddress.pincode);
        setPhoneNumber(editAddress.PhoneNumber);
        setFullAddress(editAddress.fullAddress);
    }
  },[editAddress])

  const submitHandle=async(e)=>{
  e.preventDefault()
  const validationErrors = {};
  if (!State) validationErrors.State = 'State is required';
  if (!City) validationErrors.City = 'City is required';
  if (!pincode) validationErrors.pincode = 'Pincode is required';
  if (!PhoneNumber) validationErrors.PhoneNumber = 'Phone number is required';
  if (!fullAddress) validationErrors.fullAddress = 'Full address is required';

  if (Object.keys(validationErrors).length > 0) {
    setError(validationErrors);
    return;
  }

  const data = {
   State,
   City,
   pincode,
  PhoneNumber,
   fullAddress
};

 await onSave(data)

setState('')
setCity('')
setPincode('')
setPhoneNumber('')
setFullAddress('')
setError({})
  }

 

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <p style={{fontSize:'14px',fontWeight:'600',marginRight:'900px'}}> <IoLocation/>Add Address</p>
      <form onSubmit={submitHandle} className={styles.form}>
      <div className={styles.firstgroup}>
        <div className={styles.inputGroup}>
          <select value={State} className={styles.select}  onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Delhi">Delhi</option>
            <option value="Haryana">Haryana</option>
          </select>
          {error.State && <p className={styles.error}>{error.State}</p>}
        </div>
        
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            className={styles.select}
          />
          {error.City && <p className={styles.error}>{error.City}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className={styles.select}
          />
          {error.pincode && <p className={styles.error}>{error.pincode}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Phone Number"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.select}
          />
          {error.PhoneNumber && <p className={styles.error}>{error.PhoneNumber}</p>}
        </div>
        </div>

        <div className={styles.secondgroup}>
        <div className={styles.inputGroup}>
          <textarea
            placeholder="Full Address"
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            className={styles.textarea}
          />
          {error.fullAddress && <p className={styles.error}>{error.fullAddress}</p>}
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.button} type="submit">{editAddress?'Update':'Save'}</button>
          </div>
          </div>
          </form>
          </div>
    </div>
  )
}


