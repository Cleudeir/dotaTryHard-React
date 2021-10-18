const SearchPlayerAD = ()=>{

    const search = async ()=>{
        let playerAdArry = []
        let playerAdSet = new Set()
        let playerAdUnicos = []
        let PlayerOrder = []
        
        for(let i=0;i<idSteam.length;i++){
            
            let a = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1/?account_id=${idSteam[i]}&game_mode=${gameMode}&key=${apiKey}`)
            .then((response)=>{
                return  response.json()
            })
            .then((data)=>{
                let x = data.result.matches
                if(x != undefined){
                    let matchHistoryPlayerSet = new Set();
                    let matchHistoryPlayerUnicos = []
                    for(let i=0; i<x.length;i++){
                        for(let j=0; j<x[i].players.length;j++){
                            matchHistoryPlayerSet.add(x[i].players[j].account_id)
                        }
                    }
                    matchHistoryPlayerSet.forEach(x=>matchHistoryPlayerUnicos.push(x)) 
                    //console.log({matchHistoryPlayerUnicos});
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
                    console.log(playerAdSet)
                }
            }
            playerAdSet.forEach(x=>playerAdUnicos.push(x))
            PlayerOrder = playerAdUnicos.sort()
            return (await PlayerOrder)
        }
        
        const compilation  = await search()
        const result = await compilation.sort()
        await localStorage.setItem('result',JSON.stringify(result))
        console.log({result})
        return(await result)
    }
    export default SearchPlayerAD;