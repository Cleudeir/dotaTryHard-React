import './Css/App.css';
import React, { useState, useEffect } from 'react';
import IdConverter from './RequestApi/IdConverter';
import RequestApi from './RequestApi'
const App =  ()=> {
  const [date, setDate] = useState(false);

  const input =(e)=>{
    const {value}  = e.target

  }
  const button=async()=>{
    let dateSearch = await RequestApi()
    console.log(dateSearch)
    setDate(dateSearch)
  }
  useEffect(() => {
   
    
  },[]);
 
  return (
    <div className="App">
    <div>
      <input type='text' onChange={input} placeholder='Nick Name'/>
      <button onClick={button} type='button'>Buscar</button>
    </div>
    <div className='result'>
     {date && 
      date.map((x,i) => {
        return(
        <div>
        <img src={x.avatarfull} alt={x.personaname+i} width='94'/>
        <h2>{x.personaname}-{x.loccountrycode}</h2>
        </div> 
         )
      })
       }
    
    </div>
    </div>
  );
}

export default App;
