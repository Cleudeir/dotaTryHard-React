import {PlayersId} from '../Results/PlayersId'
const SteamID = require('steamid');
const IdConverter = async()=>{
    
    const urlApi = 'https://api.opendota.com/api/' 
    let ids = []
    for(let i=0;i<PlayersId.length;i++){
    let sid = new SteamID(`[U:1:${PlayersId[i]}]`);
    ids.push({id32:PlayersId[i],id64: parseInt(sid.getSteamID64())})
}
    console.log(ids)
    return('')
}
export default IdConverter;