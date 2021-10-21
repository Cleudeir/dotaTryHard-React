const SearchPlayerAD = async ({value,apiKey,hostUrl,proxy,gameMode})=>{
    console.log('SearchPlayerAD')
    const search = async ()=>{
        let playerAdArry = []
        let playerAdSet = new Set()
        let playerAdUnicos = []
        let PlayerOrder = []
        
        let a = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1/?account_id=${value}&game_mode=${gameMode}&key=${apiKey}`)
        .then((response)=>{return  response.json()})
        .then((data)=>{
            console.log('PlayerAD')
            let x = data.result.matches
            if(x !== undefined){
                let matchHistoryPlayerSet = new Set();
                let matchHistoryPlayerUnicos = []
                for(let i=0; i<x.length;i++){
                    for(let j=0; j<x[i].players.length;j++){
                        matchHistoryPlayerSet.add(x[i].players[j].account_id)
                    }
                }
                matchHistoryPlayerSet.forEach(x=>matchHistoryPlayerUnicos.push(x)) 
                return(matchHistoryPlayerUnicos)
            }
        })
        .catch(()=>{return undefined});

        if(a!= undefined){
            playerAdArry.push(a)
            for(let i=0; i<playerAdArry.length;i++){
                for(let j=0; j<playerAdArry[i].length;j++){
                    playerAdSet.add(playerAdArry[i][j])
                }}
            }
        
        playerAdSet.forEach(x=>playerAdUnicos.push(x))
        PlayerOrder = playerAdUnicos.sort()
        
        
        return (await PlayerOrder)
    }
    const compilation  = await search()
    const result = await compilation.sort()
    return(await result)
}
export default SearchPlayerAD;