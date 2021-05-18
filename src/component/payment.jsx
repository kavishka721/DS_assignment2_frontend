import React, { Component } from "react";
import CreatePayment from "./createPayment";
import MobilePayments from "./mobilePayment";

class Payments extends Component {
    state = {
       mobile: false,
        card: true
    }


    render(){

        const HandleChange = e => {
            this.setState({mobile: !this.state.mobile});
            this.setState({card: !this.state.card});
        }
        const c = this.state.card;
        const m = this.state.mobile;
        //{val?'Card Payment':'Mobile Bill Payment'}
        return(
            <div>
                {/* {c?'Card': 'Payment'}   {m?'Payment': 'Card'} */}
                <button className="btn  mt-3 " style={{backgroundColor:"#F5BCA9", marginLeft: "45px"}} onClick={HandleChange} >Card Payment</button> 
                <button className="btn  mt-3 " style={{backgroundColor:"#F78181", marginLeft: "20px"}} onClick={HandleChange} >Mobile Payment</button> 
                {
                    c && (<CreatePayment/>)
                     
                }
                {
                    m && (<MobilePayments/>) 
                }
            </div>
        )
    }
}

export default Payments