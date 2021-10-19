import Winrate from './RequestApi/Winrate'
import SearchSumaryPlayer from './RequestApi/SearchSumaryPlayers'
const RequestApi= async ({value})=>{
    const apiKey = '048776627077105958873BA4C749CEFF'
    const hostUrl = 'http://api.steampowered.com'
    //const proxy = 'https://cors-anywhere.herokuapp.com/'
    const proxy = 'https://thingproxy.freeboard.io/fetch/'
    const gameMode = 18
    
    let win = await Winrate({value,apiKey,hostUrl,proxy,gameMode})
    let player = await SearchSumaryPlayer({value,apiKey,hostUrl,proxy,gameMode})
    return({win,player})
}
export default RequestApi;