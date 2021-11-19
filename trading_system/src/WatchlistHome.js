import Watch from "./Watch";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
const WatchlistHome = () => {
  const { error, isPending, data: company } = useFetch('http://localhost:8004/watchlist')

  return (<div>
      <Navbar/>

    <div  style={{marginTop:'2%'}}>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { company && <Watch company={company} /> }
    
    </div></div>
    
  );
}
 
export default WatchlistHome;
