const SearchSumaryPlayersAD = async({idGame,proxy,hostUrl,apiKey,PlayersId})=>{
    console.log('SearchSumary')
    const search = async ()=>{
        let array = []
        for(let i=0;i<PlayersId.length;i++){
            let a = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${PlayersId[i].steamid}`)
            .then((response)=>{
                return  response.json()
            })
            .then((data)=>{
                let x = data.response.players[0]
                console.log('x',PlayersId.length)
                    let {avatarfull,loccountrycode,personaname,profileurl,steamid,timecreated} = x
                    let players = {avatarfull,loccountrycode,personaname,profileurl,steamid,timecreated,account_id:PlayersId[i].account_id}
                    if(x!=undefined){                             
                        return(players)
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