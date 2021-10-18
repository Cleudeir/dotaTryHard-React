const Winrate = async  ({PlayersId,apiKey,hostUrl,proxy,gameMode})=>{
    console.log('Winrate')
    const search = async ()=>{
        let player = []

        console.log(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${PlayersId.BR[0].account_id}&game_mode=${gameMode}&key=${apiKey}`)

        console.log(`${PlayersId.BR[0].account_id}`)
        
        /*for(let i=0;i<50;i++){*/
            
            let search = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${PlayersId.BR[0].account_id}&game_mode=${gameMode}&key=${apiKey}`)
            .then((response)=>{
                return  response.json()
            })
            .then((data)=>{
                let x = data.result.matches
                console.log(x)
                return(x)
            })
            .catch((error)=>{console.log(error);return undefined});
            
            player.push(search)
          /*  return (player)
      }*/
    }  
        const compilation  = await search()
        const result = await compilation
        console.log(result)
        return('await result')
    
}
export default Winrate;