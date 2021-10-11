

const RequestApi=  ({idDota})=>{
    const apiKey = '048776627077105958873BA4C749CEFF'
    const hostUrl = 'http://api.steampowered.com'
    const matchID = '6211809022'
    const dominio = 'avatar'
    //const proxy = 'https://cors-anywhere.herokuapp.com/'
    const proxy = 'https://thingproxy.freeboard.io/fetch/'
    const gameMode = 18
    let idGame = '570'
    let idSteam = [76561198047949150,76561197990775980,76561198018040300]
    const request =async()=>{
          /*
            const GetPlayerSummaries = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${idUser}&`)
            .then((response)=>{return  response.json()})
            .then((data)=>{return(data.response.players[0])})
            .catch((error)=>{console.log(error.message);return(false)})
            
            const GetFriendList = await fetch(`${proxy}${hostUrl}/ISteamUser/GetFriendList/v0001/?key=${apiKey}&steamid=${idUser}&relationship=friend`)
            .then((response)=>{return  response.json()})
            .then((data)=>{return(data.friendslist.friends)})
            .catch((error)=>{console.log(error.message);return(false)})
            */
             /*
            let matchHistoryDetail = []
            for(let i=0; i<10;i++){
                let id = matchHistory[i].match_id                   
                console.log(id)                                   
                let x = fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchDetails/v1?key=${apiKey}&match_id=${id}`)
                .then((response)=>{return  response.json()})
                .then((data)=>{console.log(data.result) ;return(data.result)})
                .catch((error)=>{console.log(error.message);return(false)})
                matchHistoryDetail.push(await x)
            }
            */
        let matchHistory =JSON.parse(localStorage.getItem("matchHistory"))
        if(!matchHistory){
                matchHistory = []
                for(let i=0;i<idSteam.length;i++){
                    let a = fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1/?account_id=${idSteam[i]}&game_mode=${gameMode}&key=${apiKey}`)
                    .then((response)=>{return  response.json()})
                    .then((data)=>{/*console.log(data.result.matches)*/;return(data.result.matches)})
                    .catch((error)=>{console.log(error.message);return([error.message])}) ;
                    matchHistory.push(await a)
                }
               
            let matchHistoryPlayer = new Set();
            for(let k=0; k<matchHistory.length;k++){
            for(let i=0; i<matchHistory[k].length;i++){
                for(let j=0; j<matchHistory[k][i].players.length;j++){
                    matchHistoryPlayer.add(matchHistory[k][i].players[j].account_id)
            }}}
            let matchHistoryPlayerUnicos = []
            matchHistoryPlayer.forEach(x=>matchHistoryPlayerUnicos.push(x))
            if(matchHistoryPlayerUnicos.length>0){
                localStorage.setItem("matchHistory", await JSON.stringify(matchHistoryPlayerUnicos.sort()))
            }
            console.log(matchHistoryPlayerUnicos.sort())
        }
            matchHistory =JSON.parse(localStorage.getItem("matchHistory"))
            const compilation  = {matchHistory}
            const result = await compilation
            return(result)
    }
    request()
    
    return('')
}
export default RequestApi;


