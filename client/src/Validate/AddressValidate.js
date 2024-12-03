const AddressValidate=(State,City,pincode,PhoneNumber,fullAddress)=>{
    let valid=true
    let invalid={
        State:false,
        City:false,
        pincode:false,
        PhoneNumber:false,
        fullAddress:false  
    }

    if( !State || !City || !pincode || !PhoneNumber || !fullAddress ){
        valid=false
        invalid={
            State:!State,
            City:!City,
            pincode:!pincode,
            PhoneNumber:!PhoneNumber,
            fullAddress:!fullAddress 
        }
    }

    return{
           valid,
           invalid
        }
}

export default AddressValidate;