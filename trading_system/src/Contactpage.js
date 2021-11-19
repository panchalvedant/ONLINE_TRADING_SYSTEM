import React from 'react'
import comm from './img/communicate.png'
export default function Contactpage() {
    const aboutsection = {
        padding: "50px",
        textAlign:"center",
        color:"white" ,
      }
    return (
        <section>
            <div style={aboutsection}>
                <div style={{textAlign:'center'}}>
                    <h2 style={{fontSize:"5rem",backgroundColor:"#474e5d",color:'#60F3A0',borderRadius:"8px"}}>Contact Us</h2><br></br>
                </div>
                <div classname="row" style={{color:'#ECA597',borderRadius:"8px"}}>
                    <div classname="column" style={{fontSize:"2rem",backgroundColor:"#474e5d",borderRadius:"8px"}}>
                        <img src={comm} style={{width:"400 px",height:"200px"}}/>
                        <p >Write your query or Question to Email: </p>
                        <p >Onlinetradecustomercare@gmail.com</p>
                        <p >Or Contact our Toll Free number:</p>
                        <p >1800 2255 2255</p>
                    </div>
                </div>
            </div>
        </section>
                )
}
 export {Contactpage}