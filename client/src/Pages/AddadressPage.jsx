import React, { useEffect, useState } from 'react'
import { getaddress,deleteAddress,postAddress,editAddress} from '../services/address'
import { useNavigate } from 'react-router-dom';
import AddressForm from '../Component/AddressForm';
import NavbarPage from './NavbarPage';
import styles from './AddaddressPage.module.css'
import FooterPage from './FooterPage';
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
export default function AddadressPage() {

const navigate=useNavigate()
    
    const[addressing,setAddressing]=useState([]);
    const[loading,setLoading]=useState(false)
    const[showForm,setShowForm]=useState(false)
    const[editAddressData,setEditAddData]=useState(null)

    const getAllAddress=async()=>{
      setLoading(true);
      try {
        const res = await getaddress();
        setAddressing(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(()=>{
        getAllAddress();
    },[])

    const deleteadd=async(addressId)=>{
        try{
        await deleteAddress(addressId)
        setAddressing(addressing.filter((address)=>address._id!==addressId))

        } catch(error){
            console.log(error)
        }
    }

    const handleSave = async (data) => {
      try {
         if(editAddressData){
           const updateAddress=await editAddress(data,editAddressData._id);
           setAddressing((prev) =>
            prev.map((address) =>
              address._id === editAddressData._id ? updateAddress.data : address
            )
          );
           alert('successfully updated' )
             }
        else{
        const res = await postAddress(data);
          setAddressing((prev) => [res.data, ...prev]); 
          alert('successfully added')
        }
          
          setShowForm(false); 
          setEditAddData(null)
        
      } catch (error) {
        console.error('Error saving address:', error);
      }
    };

    const handleEdit = (address) => {
      setEditAddData(address); 
      setShowForm(true);
    };

    const handleSelectedAddress=(addressId)=>{
       navigate(`/checkout/${addressId}`)
    }
  return (
    <div>
<NavbarPage/>

<h2 className={styles.headline}><FaArrowLeft />Your Addresses</h2>
      <div className={styles.container}>
       
        <div className={styles.add} onClick={()=>{
          setEditAddData(null)
          setShowForm(true)
          }}><span>+</span> Add Address</div>
{showForm && <AddressForm onSave={handleSave} editAddress={editAddressData}/>}


        <div className={styles.addresses}>
      {loading? (<p>Loading..</p>):(addressing.map((address)=>(
        <div className={styles.displayed} key={address._id} >
           
           <div >
            <div onClick={()=>handleSelectedAddress(address._id)} className={styles.half}>
             <p> {address.fullAddress} {address.State} {address.City} {address.pincode}</p>
         
            </div>
            <div> <p>{address.PhoneNumber}</p></div>
           
            
           </div>
           <div className={styles.editdel}>
           <p className={styles.edit} onClick={()=>handleEdit(address)}>Edit</p>
           <p className={styles.delete} onClick={()=>deleteadd(address._id)}>Delete</p>
           </div>         
            </div>
      ))
    )}
    </div>
    </div>

<FooterPage/>
    </div>
  )
}
