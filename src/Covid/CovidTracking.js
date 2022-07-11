import axios from 'axios';
import React,{useEffect, useState} from 'react'


function CovidTracking() {
    const[inputData,setinputData]=useState([]);

    const getDATA=async()=>{
    const apidata=  await axios.get('https://data.covid19india.org/data.json')
    //  console.log(apidata.data.statewise[1])
     setinputData(apidata.data.statewise[1])

    }
   
    // https://api.covid19india.org/data.json
    useEffect(()=>{
        getDATA();
    },[])

  return (
    <>
    <div className='bgcolor '>
    <div className='center'>
    <h1 className='live'>LIVE </h1>
    <h3>COVID 19 CORONA TRACKER</h3>
    </div>
    
    <div className="container">
    <table className="table">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>
              <div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title"><span>OUR</span> COUNTRY</h5>
            <h2 className="card-text" style={{color: 'orange'}}>INDIA</h2> 
          </div>
        </div>
              </td>
              <td><div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title colorblue"><span>Total</span> RECOVERED</h5>
            <h2 className="card-text">{inputData.recovered}</h2> 
          </div>
        </div>
              </td>
              <td><div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title"><span>TOTAL</span> CONFIRMED</h5>
            <h2 className="card-text">{inputData.confirmed}</h2>
          </div>
        </div>

              </td>
            </tr>
            <tr>
              <td>
              <div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title"><span>TOTAL</span> DEATH</h5>
            <h2 className="card-text">{inputData.deaths}</h2>
          </div>
        </div>
              </td>
              <td><div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title colorred"><span style={{color:'white'}}>Total</span> ACTIVE</h5>
            <h2 className="card-text">{inputData.active}</h2>
          </div>
        </div>
              </td>
              <td><div className="card text-white bg-dark mb-3 increasewidth" style={{maxWidth: '18rem'}}>
          
          <div className="card-body">
            <h5 className="card-title colorgreen"><span style={{color:'white'}}>LAST</span> UPADTED</h5>
            <h3 className="card-text">{inputData.lastupdatedtime}</h3>
          </div>
        </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
      </div>   
</>
  )
}

export default CovidTracking