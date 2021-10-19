const SteamID = require('steamid');
const SearchSumaryPlayer = async({value,apiKey,hostUrl,proxy,gameMode})=>{
    console.log('SearchSumary')
    
    const IdConverter = async()=>{
        let id = new SteamID(`[U:1:${value}]`);
        console.log(id)
        return(id)
    }
    let valueSteam = await IdConverter()
    const search = async ()=>{        
        let a = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${valueSteam}`)
        .then((response)=>{return  response.json()})
        .then((data)=>{
            let x = data.response.players[0]
            console.log('x')
            let {avatarfull,loccountrycode,personaname,profileurl,steamid,timecreated} = x
            let players = {avatarfull,personaname,profileurl,steamid}
            if(x!=undefined){                             
                return(players)
            }          
        })
        .catch((x)=>{return false});        
        return (await a)
    }
    const compilation  = await search()
    const result = await compilation
    return(await result)
}
export default SearchSumaryPlayer;