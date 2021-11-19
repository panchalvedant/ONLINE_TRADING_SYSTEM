import React from 'react'
import "./home.css";
import home1 from './img/home.jpg'
import Zero from './img/zerofees.png'
import help from './img/call-center.png'
import iface from './img/interface.png'
import profit from './img/profit.png'
import dont from './img/thumb-down.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <>
      <Navbar />
    <section className="home">
      <img src={home1} alt="" />
      <div style={{color:'#7DBFEC'}}>
        <h1 >One platform. Multiple investment opportunities. </h1>
        <p style={{color:'#C3E8FF'}}> Long term investors, pro traders or part-time traders can </p>
        <p style={{color:'#C3E8FF'}}>choose across various asset classes and create a customised </p>
        <p style={{color:'#C3E8FF'}}> portfolio. All from one platform.</p>
      </div>
      <div className="back">
        <h1 style={{color:'gray'}}>Zero Transaction Fees</h1>
        <img src={Zero} alt="" />
      </div>
      <div  style={{color:'#F3EFB8'}}>
        <h1>Why invest with Us?</h1>
        <div>
        <img style={{height:100,width:100}} src={profit} alt="" />
        <p>Fast Transaction,Fast Profit</p>
        <h2>Money is added in your account within 2 to 3 hours</h2>
        <br/>
        <img style={{height:100,width:100}} src={iface} alt="" />
        <p>User friendly ui</p>
        <h2>A Simple and good looking ui for any type of User to invest smartly.</h2>
        <br/>
        <img style={{height:100,width:100}} src={help} alt="" />
        <p>Support 24/7</p>
        <h2>A team of professionals speaking your mother tongue are always here to support you.</h2>
        <br/>
        </div>
      </div>
      <div className="back" style={{color:'#6750FF'}}>
        <h1>Don't do this</h1>
        <img style={{height:200,width:200}} src={dont} alt="" />
      <h2> Do not deal with unregistered intermediaries.</h2>
      <h2> Do not pay more than the approved brokerage to the intermediary.</h2>
      <h2> Do not undertake deals for others.</h2>
      <h2> Do not neglect to set out in writing, orders for higher value given over phone.</h2>
      <h2> Do not sign blank Delivery instruction slip(s) while meeting security pay-in obligation. </h2>
        
        </div>


    </section>
    <Footer/>
    </>
  )
}
export { Homepage }