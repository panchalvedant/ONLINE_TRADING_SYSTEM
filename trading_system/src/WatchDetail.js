import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Plot from 'react-plotly.js';
import {InfoC} from './InfoC';
import Chart from "./Chart";
import Stock from "./stock";
import Navbar from "./Navbar";
import './watchlistdetails.css'
import React, {  useEffect,useState } from 'react';
import axios from 'axios';


const WatchDetails = () => {
  const [result, setResult] = useState('');
  const { id } = useParams();
  const { data: watchlist, error, isPending } = useFetch('http://localhost:8004/watchlist/' + id);
  const history = useHistory();
  const [count, setCount] = useState(1);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);

  };
  const RemoveFromDB = (watchlist1) => {
    fetch('http://localhost:8004/watchlist/' + watchlist.id, {
      method: 'DELETE'
    }).then(() => {
        alert(watchlist1.name +' has been deleted ):');
      history.push('/WatchlistHome');
    }) 
  }
 
  // console.log(watchlist["price"]);
  const AddTODB =(watchlistx)=>{
   
    const name =watchlistx['name'];
    const price= watchlistx['price'];
    const priceChange= watchlistx['priceChange'];
    const watchlist2 ={name,price,count,priceChange};
    fetch('http://localhost:8005/portfolio',{
      method: 'POST',
      headers: {'Content-Type':"application/json"}, 
      body: JSON.stringify(watchlist2)
    }).then(()=>{
      console.log('added');
      alert(name + ' has been Added to Portfolio \\{^_^}/ ');
    })
  }
  // console.log(watchlist.name);
  // let name= 'ibm';
 
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${watchlist}&apikey=QLC4LW522J6KY4JK`
  //     )
  //     .then(res => {
        
  //       console.log(res.data);
        
  //     })
  //     .catch(error => console.log(error));
  // }, []);

 
  return (
    <div><Navbar />
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { watchlist && (
      <div>
       
         
<br/> 
          {/* <div className="chart">
                <Chart company = { String(watchlist.name) }/> */}
    {/* <Plot className="plot"
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'
              },
              backgroundcolor: "rgb(255,0,0)",
              showbackground: true,
              line: {
                color: '#ff9933',
                width: 3
              }
            }
          ]}
          layout={{width: 1024, height: 720, title: ''}}
        />
      </div> */}
      <div className="Details">
      {/* <h3>Price : ${ watchlist.price }</h3>
      <div>High : ${ watchlist.high }</div>
      <p>Low : ${ watchlist.low }</p>
      <div>Volume : ${ watchlist.volume }</div>
      <p>Marketcap : ${ watchlist.marketcap }</p>
      {Number( watchlist.priceChange).toFixed(2)< 0 ? (
            <p className='coin-percent red'>{ Number(watchlist.priceChange).toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{Number(watchlist.priceChange).toFixed(2)}%</p>
          )} */}
  <InfoC company = { watchlist}/> 
      </div>
    <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br> 
    <div>
    
       
    <label>qty : {count}</label> &nbsp;
     <button onClick={handleIncrement} style={{width:"5%"}}>+</button> &nbsp;
     <button onClick={handleDecrement} style={{width:"5%"}}>-</button>
     &nbsp; &nbsp;
   <button onClick={() => setCount(0)} style={{width:"5%"}}>Reset</button>
 </div>  <br></br>  <br></br> 
   <button  className="w1" onClick={() => AddTODB(watchlist)}>Buy Stocks</button>
    <br></br>   <br></br>  
          <button  className="w" onClick={() => RemoveFromDB(watchlist)}>Delete From Watchlist</button>
          </div>
      )}
    </div></div>
  );
}
 
export default WatchDetails;