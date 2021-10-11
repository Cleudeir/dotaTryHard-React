const OpenApi = async(props)=>{
    console.log(props)
    const urlApi = 'https://api.opendota.com/api/'
    let players = `players/${props}`
    

    const search = (e)=>{
        
       let a = fetch(urlApi+e)
       .then((data)=>{return data.json()})
       .then((data)=>{console.log(data);return data})
       .catch((error)=>{console.log(error);return false})
       return(a)
    }
    let matches = `${players}/matches?game_mode=18`
    let matchesSearch = await search(matches)
    let matchesPromise = await  Promise.all(matchesSearch)

    let rankings = `${players}`
    let rankingsSearch = await search(rankings)
    let rankingsPromise = await  Promise.all(rankingsSearch)
    //let matchesFilter = matchesSearch.filter(x => x.game_mode == 18)
    
   
    console.log(matchesPromise,rankingsPromise)
    return('')
}
export default OpenApi;