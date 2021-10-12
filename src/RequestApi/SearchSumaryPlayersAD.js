const SearchSumaryPlayersAD = async({idGame,proxy,hostUrl,apiKey,PlayersId})=>{
    console.log('SearchSumary')
    const search = async ()=>{
        let array = []
        for(let i=0;i<50;i++){
            let a = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${PlayersId[i].id64}`)
            .then((response)=>{
                return  response.json()
            })
            .then((data)=>{
                let x = data.response.players[0]
                console.log(x)
                if(x.personastate === 1){
                    let {avatarfull,loccountrycode,personaname,profileurl,steamid,timecreated} = x
                    let players = {avatarfull,loccountrycode,personaname,profileurl,steamid,timecreated}
                    console.log(players)
                    if(x!=undefined){                             
                        return(players)
                    } 
                }                
            })
            .catch((x)=>{return false});
            if(a){
                array.push(a)
            }
         
        }
        return (await array)
    }
    
    const compilation  = await search()
    const result = await compilation
    console.log(result)
    return(await result)
}
export default SearchSumaryPlayersAD;