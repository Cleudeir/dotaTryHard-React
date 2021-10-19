import './Css/App.css';
import React, { useState, useEffect } from 'react';
import RequestApi from './RequestApi'
const App =  ()=> {
  const [dateWin, setDateWin] = useState(false);
  const [datePlayer, setDatePlayer] = useState(false);
  const [delay, setDelay] = useState(false);
  const [value, setValue] = useState(87683422);
  
  const input =(e)=>{
    const {value}  = e.target
    setValue(value)}
    
    const button = async()=>{
      
      if(value){
        console.log('click')
        setDelay(true)
        let {win,player} = await RequestApi({value})
        setDelay(false)
        setDateWin(win)
        setDatePlayer(player)
      }
    }
    useEffect(() => {
      
      
    },[]);
    
    return (
      <div className="App">
      <div>
      <input type='text' onChange={input} placeholder='ID DOTA'/>
      <button onClick={button} type='button'>Buscar</button>
      </div>
      {dateWin && datePlayer &&
        <div className='result'>
        <div className='cabecalho'>
        <a href={datePlayer.profileurl} style={{textDecoration: 'none',color:'black'}}>
        <img src={datePlayer.avatarfull} height='100%' alt='a'/>
        </a>
        <h1>{datePlayer.personaname}</h1>
        </div>
        <table className="comicGreen">
          <tbody>
        {
          Object.keys(dateWin).map((key,i)=> {
            return (
              key !== 'win_rate' && key !== 'ranking_rate' 
              ?
              <tr key={i}>
              <td>{key}</td><td>{dateWin[key]}</td>
              </tr>
              :
              <tr key={i}>
              <td> 
              <h1>{key}</h1></td><td><h1>{dateWin[key]}</h1>
              </td>
              </tr>
              )
            })
          }
          </tbody>
          </table>
          </div>
        }
        {delay &&
          <div style={{margin: '80px 0px',height:'50vh'}}>
          <h3>Aguarde pode demorar...</h3>
          <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='a'/>
          </div>
        }
        </div>
        );
      }
      
      export default App;
      