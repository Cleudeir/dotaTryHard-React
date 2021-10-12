import {PlayersId} from './Results/PlayersId'
import SearchSumaryPlayersAD from './RequestApi/SearchSumaryPlayersAD'
const RequestApi= async ()=>{
    const apiKey = '048776627077105958873BA4C749CEFF'
    const hostUrl = 'http://api.steampowered.com'
    
    //const proxy = 'https://cors-anywhere.herokuapp.com/'
    const proxy = 'https://thingproxy.freeboard.io/fetch/'
    const gameMode = 18
    const idGame = '570'

    let playersOnline = SearchSumaryPlayersAD({idGame,proxy,hostUrl,apiKey,PlayersId})

        return(playersOnline)
    }
    export default RequestApi;
    
    
    