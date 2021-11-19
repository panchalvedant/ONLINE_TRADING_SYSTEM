import React from 'react';
import Plot from 'react-plotly.js';
// import "./css/stock.css";
import { Link } from 'react-router-dom';

//QLC4LW522J6KY4JK
// class Stock extends React.Component { 
 
 
//   constructor(props) {
   
//     super(props);
   
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: [],
//       name: 'TCS.BSE',
     
//       customer: {
//         firstName : props.firstName,
        
//       },
//       value: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.updateState = this.updateState.bind(this) ;
//     this.fetchStock( );
    
//   }
//   updateState(){ 
//     // Changing state 
//     this.setState({name : this.state.value}) ;
//     console.log(this.state.name);
//     this.setState({value:this.state.value});
//    this.fetchStock( ); 
//   } 
//   handleChange(event) {
//     this.setState({value: event.target.value});
    
//   }
 
//   componentDidMount() {
//     this.fetchStock( );
//   }
  
 
//   fetchStock() {
//     const pointerToThis = this;
//     //A0KA42Q8F2PXWPFB
//     const API_KEY = 'QLC4LW522J6KY4JK';

//     let StockSymbol = this.state.name;

//     let API_Call2 =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

//     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call2)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (Daily)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            
//           }

         
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     var str ="\\{^_^}/"
//     return (
    
//       <div style={{width: '200px', height: '200px'}}>
//         <h1> {str}</h1>
//         <h1>Stock Market</h1>
//        <br/><Link to="/AddStock" style={{color: 'white'}}>Add</Link> <br/> <br/>
//        <br/><Link to="/WatchlistHome" style={{color: 'white'}}>Watchlist</Link> <br/> <br/>
//         <div className="TextBox">
          
//         <p>{this.state.name}</p>
//           <input type="text"
//            className="txtB" 
//            placeholder=" EX. TCS.BSE" 
//             name='name' style={{color: 'white'}}
//             value={this.state.value} onChange={this.handleChange}
//            /> 
//          <button className="btn" onClick={this.updateState}> 
//           Search
//           </button> 
//           <br/><br/>
//         </div>
        
//         <Plot className="plot"
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'green'
//               },
//               backgroundcolor: "rgb(255,0,0)",
//               showbackground: true,
//               line: {
//                 color: '#ff9933',
//                 width: 3
//               }
//             }
//           ]}
//           layout={{width: 1024, height: 720, title: ''}}
//         />
//       </div>
//     )
//   }
// }

// export default Stock;



// import React from 'react';
// import Plot from 'react-plotly.js';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }
}

export default Stock;