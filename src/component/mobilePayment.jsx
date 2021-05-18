import React, { useState } from 'react';
import axios from 'axios'



const MobilePayments = function(props){
    const[mpaymentID,setCode] =useState("");
    const[mobileServiceProvider,setName] = useState("");
    const[phoneNo,setQuantity] = useState(0);
    const[pinNo, setPrice] =  useState(0)
    const[chargedAmount ,setStatus] = useState("");


    const handlePid = e =>{
        setCode(e.target.value);
    }

    const handleServiceProvider = e =>{
        setName(e.target.value);

    }

    const handlePhoneNo = e =>{
        setQuantity(e.target.value);

    }

    const handlePinNo = e =>{
        setPrice(e.target.value);

    }

    const handleChargedAmount = e =>{
        setStatus(e.target.value);

    }

    const handleDate =  e =>{
        setDate(e.target.value);
    }
   

const MobilePayments = ()=>{
    let paymentData = {
        paymentID: pid,
        mobileServiceProvider: serviceProvider,
        phoneNo: phone,
        pinNo: pin,
        chargedAmount: amount,
        
        
    }
    axios.post('http://localhost:8082/api/mobile/payments',mpaymentData)
         .then(function (response){
             console.log(response.mpaymentData)
             window.location = '/';
         }).catch(function(er){
             console.log(er)
         })

         
    

}
        // have to edit below code
    return(

        <div className="submit-form m-5" style={{color:"#52ab98"}}>
            <div className="mb-3">
                <label htmlFor="itemCode" className="form-label">paymentID</label>
                <input type="text" className="form-control" id="pid"  onChange={handlePid}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Type</label>
            <select  className="form-control" aria-label="Default select example"  onChange={handleServiceProvider}>
                <option value="Visa" defaultValue="Available">Dialog</option>
                <option value="Master" >SLT Telecom</option>
                <option value="Master" >Mobitel</option>
                <option value="Master" >Hutch</option>
            </select>
            </div>

            <div className="mb-3">
                <label htmlFor="itemName" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="name"  onChange={handlePhoneNo}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">PIN Number</label>
                <input type="number" className="form-control" id="cardNO"  onChange={handlePinNo}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Charged Amount</label>
                <input type="text" className="form-control" id="amount"  onChange={handleChargedAmount}/>
            </div>

           
            
            <div className="col-md-12 text-center">
                <button  className="btn  mt-3 " style={{backgroundColor:"#58ACFA",color:"white"}} onClick={MobilePayments}>Submit</button>
            </div>
            
        </div>
        
   

    );
}
export default MobilePayments;