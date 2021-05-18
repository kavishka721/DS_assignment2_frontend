import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ShowHide from './component/showhide';
import Payments from './component/payment';
import ViewPayment from './component/viewPayment';
import Test from './component/test'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   {/* <ShowHide/> */}
    //   <Payments/>
    // </div>

  <Router>
    <Route exact path="/" component={Payments} />
    <Route path="/view" component={ViewPayment}/>
    {/* <Route path="/edit/:id" component={EditItem} /> */}
  </Router>
  );
}

export default App;

