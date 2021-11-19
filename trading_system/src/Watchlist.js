import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddStock.css';
import { Watched } from './Watched';
import { Link } from 'react-router-dom';

export const Watchlist = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        axios
            .get(
                '  http://localhost:8004/watchlist'
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
        // <Link to='WatchlistHome'> </Link>
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Watchlist</h1>
                {/* <form>
          <input
            className='coin-input'
            type='text'
            // onChange={handleChange}
            placeholder='EX. TSLA/TTM/FB/TCS'
          />
        </form> */}
            </div>
            {/* { filteredCoins.map(coin => {
        return (
          <watched
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
      })} */}
            {result.length > 0 && (
                <ul className="results">
                    {result.map((company) => (
                        <li key={company.T}>
                            <Watched company={company}
                                name={company.name}
                                price={company.price}
                                close={company.close}
                                high={company.high}
                                low={company.low}
                                marketcap={company.marketcap}
                                volume={company.volume}

                                priceChange={company.price - company.close} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// export default AddStock;

