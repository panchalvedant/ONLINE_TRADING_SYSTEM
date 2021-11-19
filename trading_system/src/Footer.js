import React, { useState } from "react";
import "./footer.css";  
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import youtube from './img/youtube.png'

 function Footer() {
   
    return (
        <div className="footer">
            <div className="social">
                <br/>
            <input type="image"  src={facebook} style={{height:50,width:50}}  href="https://www.facebook.com/"/>
            <input type="image"  src={instagram} style={{height:50,width:50}} href="https://www.instagram.com/"/>
            <input type="image"  src={youtube} style={{height:50,width:50}}  href="https://www.youtube.com/"/>
            </div >
            <div style={{color: ' #ffd480'}}>
           <h1>Head Office</h1>
           <p>502,Imperial Heights</p>
           <p> Dalal Street Mumbai- 400001.</p>
           <p>Email:Onlinetradecare@gmail.com</p>
           <p>©2021 All Right Reserved</p></div>
        </div>
    )
}
export default Footer;