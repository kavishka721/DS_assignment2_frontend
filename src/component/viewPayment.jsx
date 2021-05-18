import React from 'react';
import { render } from 'react-dom';
import Createapayments from './createPayment';

const ViewPayment = function(props) {
        //console.log(props.paymentID);

        
            // const state  = {
            // id : props.paymentID,
            // name : props.cardHolderName
            // }
            const {data} = paymentData;
            return (
                
                <div>
                    <p>Payment Details</p>

                    <p>{data.paymentID}</p>
                    <p>{data.cardHolderName}</p>
                </div>
            )
        
        

        
}

export default ViewPayment;