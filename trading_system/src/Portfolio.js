import PortfolioWatch from "./PortfolioWatch";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Totalprice from "./Totalprice";
const Portfolio = () => {
  const { error, isPending, data: company } = useFetch('http://localhost:8005/portfolio')
  const [result, setResult] = useState('');
  var totalPrice =0;

  useEffect(() => {
      axios
          .get(
              ' http://localhost:8005/portfolio'
          )
          .then(res => {
             
              setResult(res.data);
            //   console.log(res.data);
          })
          .catch(error => console.log(error));
  }, []);
  {result.length > 0 && (
    <ul className="results">
        {result.map((company1) => (
            <li key={company1.id}>
             {totalPrice = totalPrice + Number(company1.price)*(company1.count)} 
            </li>
        ))}
    </ul>
)}
  return (<div>
      <Navbar/>

    <div  style={{marginTop:'2%'}}>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { company && <PortfolioWatch company={company} /> }
      
      <br></br> <br></br> <br></br>
    </div>
 <label style={{color:'#2DC076'}}>Total Stock Price : ${totalPrice.toFixed(2)} </label>
    </div>
    
  );
}
 
export default Portfolio;
