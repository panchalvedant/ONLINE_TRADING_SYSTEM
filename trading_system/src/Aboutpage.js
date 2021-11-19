import React from 'react';
import abouti from './img/about.png'

export default function Aboutpage() {
    const aboutsection = {
        padding: "50px",
        textAlign:"center",
        backgroundColor:"#474e5d" ,
        color:"white" ,
      }
      const row1={

      }
      const column1={
        float: "left",
       
        width: "33.3%",
        marginbottom: "16px",
        padding:"0 8px" ,
    }
    const card1={
        boxshadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        margin:" 8px",
    }
    const title1={
        color:" grey",
        fontSize:"2rem",
    }
    const container1={
        padding:" 0 16px",
        content: "",
        clear: "both",
        display: "table",
        marginLeft: "166px",
}

    return (
        <section style={{alignItems:'center'}} >
            <div style={aboutsection}>
                <h1 style={{fontSize:"5rem",color:"yellow"}}>About Us</h1>
                <p style={{fontSize:"3rem",color:"#4dd2ff"}}>We are the devloper of this web App</p>
                <p style={{fontSize:"3rem",color:"#4dd2ff"}}>We all are students of Computer Science at DDIT,Nadiad</p>
            </div>
           
            <h2 style={{textAlign:'center',fontSize:"5rem",color:" #6666ff"}}>Our Team</h2>
            <div classname="row">
                <div  style={column1}>
                    <div  style={card1}>
                        <img src={abouti} alt="" style={{width:"400 px",height:"200px"}}/>
                        <div  style={container1}>
                        <h2 style={{fontSize:"3rem",color:' #00ffcc  '}}>Devansh Maru</h2>
                        <p  style={{title1,color:' #b3f0ff '}}>Devloper</p>
                                   
                                   <p style={{fontSize:"2rem",color:'#ff99cc'}}>Devanshmaru@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div  style={column1}>
                    <div  style={card1}>
                        <img src={abouti} alt="" style={{width:"400 px",height:"200px"}}/>
                        <div  style={container1}>
                        <h2 style={{fontSize:"3rem",color:' #00ffcc  '}}>Gaurav K. Mori</h2>
                        <p   style={{title1,color:' #b3f0ff '}}>Devloper</p>
                      
                        <p style={{fontSize:"2rem",color:'#ff99cc'}}>GauravKMori@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div  style={column1}>
                    <div  style={card1}>
                        <img src={abouti} alt="" style={{width:"400 px",height:"200px"}}/>
                        <div  style={container1}>
                        <h2 style={{fontSize:"3rem",color:' #00ffcc  '}}>Vedant Panchal</h2>
                        <p   style={{title1,color:' #b3f0ff '}}>Devloper</p>
                      
                        <p style={{fontSize:"2rem",color:'#ff99cc'}}>Vedantpanchal@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { Aboutpage }