import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddStock.css';
import {Coin} from './Coin';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
 export const AddStock = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    axios
      .get(
        ' http://localhost:8000/data'
      )
      .then(res => {
        setCoins(res.data);
        setResult(res.data);
        console.log(res.data);
        
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.T.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text' style={{color:"#843CF0"}} > Search a Company ...</h1>
        
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='EX. TSLA/TTM/FB/TCS'
          />
        </form>
      </div>
      { filteredCoins.map(coin => {
        return (
          <Coin
            company ={coin}
            name={coin.T}
            price={coin.o}
            close={coin.c}
            high={coin.h}
            low={coin.l}
            marketcap={coin.vw}
            volume={coin.v}
         
            priceChange={coin.o -coin.c}
          />
        );
      })}
       {/* {result.length > 0 && (
            <ul className="results">
              {result.map((company) => (
                <li key={company.T}>
                  <Coin company={company} />
                </li>
              ))}
            </ul>
          )} */}
    </div>
    </div>
  );
};

// export default AddStock;