import React, { useContext } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './Coin.css';
import useFetch from "./useFetch";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { GlobalContext } from "./context/GlobalState";
export const Watched = ({company, name,
  high,
  low,
  price,
  close,
  marketcap,
  volume,
  priceChange, }) => {
    console.log(company);
  // const {
  //   addMovieToWatchlist,
  //   addMovieToWatched,
  //   watchlist,
  //   watched,
  // } = useContext(GlobalContext);
  // let storedMovie = watchlist.find((o) => o.T === movie.T);
  // let storedMovieWatched = watched.find((o) => o.T === movie.T);

  // const watchlistDisabled = storedMovie
  //   ? true
  //   : storedMovieWatched
  //   ? true
  //   : false;

  // const watchedDisabled = storedMovieWatched ? true : false;

  // name,
  // high,
  // low,
  // price,
  // close,
  // marketcap,
  // volume,
  // priceChange,
 



// const [name1, setName1] = useState('');
// const [high1, setHigh1] = useState('');
// const [low1, setLow1] = useState('');
// const [price1, setPrice1] = useState('');
// const [close1, setClose1] = useState('');
// const [marketcap1, setMarketcap1] = useState('');
// const [volume1, setVolume1] = useState('');
// const [priceChange1, setPriceChange1] = useState('');

// const history = useHistory();
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const watchlist = { name1, marketcap1, volume1, high1,low1,price1,close1,priceChange1};

//   fetch('  http://localhost:8004/watchlist', {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(watchlist)
//   }).then(() => {
//     setName1({name});
//     setPriceChange1({priceChange}); 
//     setClose1({close});
//     setHigh1({high}) ;
//     setVolume1({volume}) ;
//     setMarketcap1({marketcap}) ;
//     setLow1({low}) ;
//     setPrice1({price});
//     history.push('/');
//   })
// }



// let storedMovie = watchlist.find((o) => o.T === list.T);
// let storedMovieWatched = watched.find((o) => o.T === list.T);

// const watchlistDisabled = storedMovie
//   ? true
//   : storedMovieWatched
//   ? true
//   : false;

// const watchedDisabled = storedMovieWatched ? true : false;

//  var cut =company.o - company.c;

//  const RemoveFromDB =(e)=>{
   
//    const watchlist ={name,price,close,high,low,marketcap,volume,priceChange};
//    fetch('http://localhost:8004/watchlist',{
//      method: 'POST',
//      headers: {'Content-Type':"application/json"}, 
//      body: JSON.stringify(watchlist)
//    }).then(()=>{
//     alert(name + ' has been removed ');
//    })
//  }
const history = useHistory();
 const RemoveFromDB = (company1) => {
    company1.preventDefault();
    const watchlist ={name,price,close,high,low,marketcap,volume,priceChange};
    fetch('http://localhost:8004/watchlist/' + company.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/Watchlist');
      alert(name + ' has been removed  ):  ');
    }) 
  }
  return (
    // <form onSubmit={handleSubmit  }>
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
        
          <h1  >{name} </h1>
       
        </div>
        <div className='coin-data'>
          <p className='coin-price' >Open   $ {price}</p>
          <p className='coin-price'>Close   $ {close}</p>
          <p className='coin-price'>High   $ {high}</p>
          <p className='coin-price'>Low   $ {low}</p>
          <p className='coin-volume'>Volume  $ {String(volume)}</p>

          {Number(priceChange).toFixed(2)< 0 ? (
            <p className='coin-percent red'>{Number(priceChange).toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{Number(priceChange).toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap   $ {String(marketcap)}
          </p>
          <button
            className="btn" 
          // disabled={watchlistDisabled}
            onClick={() => RemoveFromDB(company)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    //  </form>
  );
};

// export default Coin;


