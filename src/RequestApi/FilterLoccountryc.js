const FilterLoccountryc = async({PlayersId})=>{
    
    let countriesCode = ['','AR','BO','BR','CL','CO','EC','FK','GF','GY','PY','PE','SR','UY','VE','Unknown','Other']
    let players = countriesCode.reduce((x,i)=>{
        return{...x,[i.toString()]: []} 
    })
    
    console.log(players)
    
    for(let i=0;i<PlayersId.length;i++){
        console.log('add',PlayersId.length)
        if(PlayersId[i].loccountrycode){
            for(let j=0;j<countriesCode.length-1;j++){
                
                let a = PlayersId[i].loccountrycode
                let b = countriesCode.filter(x=> a === x).filter(x=>x !=='')
                if(b.length===1){
                    players[a].push(PlayersId[i])
                    
                }
                else{
                    players.Other.push(PlayersId[i]) 
                }
            }
        }
        else{
            players.Unknown.push(PlayersId[i])
        }
    }    
    console.log(players)
    return('')
}
export default FilterLoccountryc;