import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from "./Chart";
import './watchlistdetails.css'
export const InfoC = (company) => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');
  
    
  let name= (company["company"]["name"]);
    useEffect(() => {
        axios
          .get(
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${name}&apikey=QLC4LW522J6KY4JK`
          )
          .then(res => {
            setCoins(res.data);
            setResult(res.data);
            console.log(res.data);
            
          })
          .catch(error => console.log(error));
      }, []);
    

    //   const handleChange = e => {
    //     setSearch(e.target.value);
    //   };

    //   const filteredCoins = coins.filter(coin =>
    //     coin.T.toLowerCase()
    //   );

    return (
       <div>
           <div className="Details">
         <h1 style={{color: ' #B266FF'}}> {result.Name} </h1>  
         <br></br>
         <label style={{color: '#CCFFCC'}}>  AssetType : {result.AssetType} </label>   
          <br/>
          <br/>
          <label  style={{color: '#CCE5FF'}} >  {result.Description}</label>  
          <br/>  <br/>
            <Chart company = { company }/>
           <div className="price">
           <br/>  <br/>
               <h2 style={{color: 'rgb(218, 198, 114)',fontSize:"30px"}}> Fundamentals </h2> <br/>
       <label>Price : ${company["company"]["price"]}</label>   <br/>  <br/>  
       <label>High :  ${company["company"]["high"]}</label>     <br/>  <br/>
       <label>Low :  ${company["company"]["low"]}</label>  <br/>  <br/>
       <label>PriceChange :{Number( company["company"]["priceChange"]).toFixed(2)< 0 ? (
            <label className='coin-percent red'>{ Number(company["company"]["priceChange"]).toFixed(2)}%</label>
          ) : (
            <label className='coin-percent green'>{Number(company["company"]["priceChange"]).toFixed(2)}%</label>
          )}</label>  <br/>  <br/>
           <label>52 Week High :  ${result["52WeekHigh"]}</label>     <br/>  <br/>
       <label>52 Week low :  ${result["52WeekLow"]}</label>  <br/>  <br/>
       <label>LatestQuarter : {result["LatestQuarter"]}</label>   <br/>  <br/>
          </div> 
          <div className="tech">
          <br/>  <br/>
          <h2 style={{color: 'rgb(218, 198, 114)',fontSize:"30px"}}> Technicals </h2> <br/>
       <label>Volume : ${company["company"]["volume"]}</label>   <br/>  <br/>
       <label>Marketcap : ${company["company"]["marketcap"]}</label>   <br/>  <br/>
       <label>ShortRatio : {Number(result["ShortRatio"]).toFixed(2)}</label>   <br/>  <br/>
       <label>ShortPercentOutstanding : {Number(result["ShortPercentOutstanding"]).toFixed(2)}</label>   <br/>  <br/>
       <label>ShortPercentFloat : {Number(result["ShortPercentFloat"]).toFixed(2)}</label>   <br/>  <br/>
       <label>PercentInsiders : {Number(result["PercentInsiders"]).toFixed(2)}</label>   <br/>  <br/>
       <label>PercentInstitutions : {Number(result["PercentInstitutions"]).toFixed(2)}</label>   <br/>  <br/>
       <label>ForwardAnnualDividendRate : {Number(result["ForwardAnnualDividendRate"]).toFixed(2)}</label>   <br/>  <br/>
       <label>ForwardAnnualDividendYield : {Number(result["ForwardAnnualDividendYield"]).toFixed(2)}</label>   <br/>  <br/>
       <label>PayoutRatio : {Number(result["PayoutRatio"]).toFixed(2)}</label>   <br/>  <br/>
      
       </div>
       <div className="infoC">
       <br/>  <br/>
       <h2 style={{color: 'rgb(218, 198, 114)',fontSize:"30px"}}> About </h2> <br/>
       <label>Exchange : {result["Exchange"]}</label>   <br/>  <br/>
       <label>Currency : {result["Currency"]}</label>   <br/>  <br/>
       <label>Country : {result["Country"]}</label>   <br/>  <br/>
       <label>Sector : {result["Sector"]}</label>   <br/>  <br/>
       <label>Industry : {result["Industry"]}</label>   <br/>  <br/>
       <label>Address : {result["Address"]}</label>   <br/>  <br/>
       <label>FiscalYearEnd : {result["FiscalYearEnd"]}</label>   <br/>  <br/>
       </div>
          
        </div></div>
    );
};

// export default AddStock;

