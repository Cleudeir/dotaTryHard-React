import './App.css';
import React, { useState, useEffect } from 'react';
import RequestApi from './RequestApi';

const App =  ()=> {
  const [date, setDate] = useState('');
  const [idDota,setIdDota] = useState(87683422)

  const input =(e)=>{
    const {value}  = e.target
    setIdDota(value)
  }
  const button=async()=>{
    let dateSearch = await RequestApi({idDota})
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
      <p></p>
    </div>
    </div>
  );
}

export default App;
