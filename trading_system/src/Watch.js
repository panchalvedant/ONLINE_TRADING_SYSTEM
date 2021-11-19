import { Link } from 'react-router-dom';

const Watch = ({ company }) => {
  return (
   
    <div className="blog-list">
      <Link to="/AddStock">Add Company's ...</Link>
      {company.map(blog => (
           <div className='coin-data'>
        <div className="blog-preview" key={blog.id} >
          <Link to={`/watchlist/${blog.id}`}>
          <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
        
          <h1  style={{color: ' #E1A37F'}}>{blog.name} </h1>
       
        </div>
        <div className='coin-data'  style={{color: ' rgb(119, 255, 203)'}}>
          <p className='coin-price'>Open : ${blog.price}</p>
          <p className='coin-price'>Close : ${blog.close}</p>
          <p className='coin-price'>High : ${blog.high}</p>
          <p className='coin-price' >Low : ${blog.low}</p>
          {/* <p className='coin-volume'>Volume : ${String(blog.volume)}</p> */}

          {Number(blog.priceChange).toFixed(2)< 0 ? (
            <p className='coin-percent red'>{Number(blog.priceChange).toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{Number(blog.priceChange).toFixed(2)}%</p>
          )}

          {/* <p className='coin-marketcap' style={{color: ' rgb(119, 255, 203)'}}>
            Mkt Cap   $ {String(blog.marketcap)}
          </p> */}
          </div>
          </div>
          </div>
          </Link>
          <br/>
        </div>
        </div>
      ))}
    </div>
  
  );
}
 
export default Watch;