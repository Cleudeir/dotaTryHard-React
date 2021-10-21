import SearchSumaryPlayer from './RequestApi/SearchSumaryPlayers'
import SearchPlayerAD from './RequestApi/SearchPlayerAD'
//const proxy = 'https://cors-anywhere.herokuapp.com/'
const RequestApi= async ({value,apiKey,hostUrl,proxy,gameMode})=>{

    let playersAD = await SearchPlayerAD({value,apiKey,hostUrl,proxy,gameMode})
    
    value = await playersAD
    console.log(value)
    let players = await SearchSumaryPlayer({value,apiKey,hostUrl,proxy,gameMode})
    players.sort(function compare(a, b) {
        if (a.ranking_rate > b.ranking_rate) return -1;
        if (a.ranking_rate < b.ranking_rate) return 1;
        return 0;
    })
    
    console.log(players)
    return({players})
}
export default RequestApi;