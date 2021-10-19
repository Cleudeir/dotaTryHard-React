const SteamID = require('steamid');
const SearchSumaryPlayer = async({value,apiKey,hostUrl,proxy})=>{
    console.log('SearchSumary')
    
    const IdConverter = async()=>{
        let id = new SteamID(`[U:1:${value}]`);
        return(id)
    }
    let accountid = await IdConverter()
    const search = async ()=>{        
        let a = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${accountid}`)
        .then((response)=>{return  response.json()})
        .then((data)=>{
            let x = data.response.players[0]
            console.log('search Profile')
            let {avatarfull,personaname,profileurl,steamid} = x
            let players = {avatarfull,personaname,profileurl,steamid}
            if(x!==undefined){                             
                return(players)
            }          
        })
        .catch(()=>{return false});        
        return (await a)
    }
    const compilation  = await search()
    const result = await compilation
    return(await result)
}
export default SearchSumaryPlayer;