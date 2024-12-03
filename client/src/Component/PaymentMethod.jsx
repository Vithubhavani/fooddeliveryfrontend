import React, { useState, useEffect } from "react";
import styles from './PaymentMethos.module.css'

const PaymentForm = ({  payment, onSubmit, onDelete, onCancel }) => {
    const [formValues, setFormValues] = useState({
        cardNumber: "",
        Expiration: "",
        CVC: "",
        name: "",
      });
    
      useEffect(() => {
        if(payment){
        setFormValues({
            cardNumber: payment?.cardNumber || "",
            Expiration: payment?.Expiration || "",
            CVC: payment?.CVC || "",
            name: payment?.name || "",
          });
        }
      }, [payment]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues); 
        alert("Data edited successfully")
        onCancel();
      };

      const handleDelete=()=>{
        onDelete();
        alert("Data deleted successfully")
        onCancel();
      }

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
      <h2 className={styles.headline}>Edit Payment Method</h2>
      <form onSubmit={handleSubmit} className={styles.inputboxlabel1}>
        <div className={styles.inputboxlabel}>
          <label className={styles.label}>Card Number:</label>
          <input
            type="text"
             id="cardNumber"
            name="cardNumber"
            value={formValues.cardNumber}
            className={styles.inputbox}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputboxlabel}>
          <label className={styles.label}>Expiration:</label>
          <input
            type="text"
            id="expiration"
            name="Expiration"
            value={formValues.Expiration}
            onChange={handleChange}
            className={styles.inputbox}
          />
        </div>

        <div className={styles.inputboxlabel}>
          <label className={styles.label}>CVC:</label>
          <input
            type="text"
            id="cvc"
            name="CVC"
            value={formValues.CVC}
            onChange={handleChange}
            className={styles.inputbox}
          />

        </div>
        <div className={styles.inputboxlabel}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={styles.inputbox}
          />

        </div>

        <div className={styles.buttons}>
        <button className={styles.remove} type="button"  onClick={handleDelete}>
        Remove
      </button>
        <button className={styles.save} type="submit">Save</button> 
    <button className={styles.cancel} type="button" onClick={onCancel}>
      Cancel
    </button>
        </div>
      
      </form>
      </div>
    </div>
  );
};

export default PaymentForm;
