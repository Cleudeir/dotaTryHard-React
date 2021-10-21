const SteamID = require('steamid');

const SearchSumaryPlayer = async({value,apiKey,hostUrl,proxy,gameMode})=>{
    
    //global
    let result = []
    console.log(value)
    if(value.length>1 && localStorage.getItem('result')){
        result = JSON.parse(localStorage.getItem('result'))
    }
    //--
    const search = async ({accountid,steamId})=>{ 
        let obj = {
            win_rate : 0,
            ranking_rate: 0,
            media_gpm : 0,
            media_xpm : 0,
            media_kills : 0,
            media_deaths : 0,
            media_last_hists : 0,
            media_denies : 0,
            media_hero_damage : 0,
            media_hero_healing : 0,
            media_net_worth : 0,
            media_tower_damage : 0,
            media_assists : 0,
            match: 0
        }  
        //Profile account
        let profile = await fetch(`${proxy}${hostUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`)
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
        .catch((e)=>{console.log(e.message);return false});  
        if(!profile){
            profile = {avatarfull:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a8/a881079e7abf4c621e86e21116f8c0dd3ee40619_full.jpg',
            personaname:'unknown',
            profileurl:'unknown',
            steamid:steamId}
            obj.accountid = accountid
            let pre = Object.assign({}, obj, profile);
            result.push(pre);
            if(value.length>1){
                localStorage.setItem('result',JSON.stringify(result))
            }
            return (await result)
        }
        //Match History
        let Match_History = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${accountid}&game_mode=${gameMode}&key=${apiKey}`)           
        .then((response)=>{return  response.json()})
        .then((data)=>{
            console.log('search_History')
            if(result.status==15){
                return false
            }
            
            let x = data.result.matches
            let z = []
            for(let j=0;j<x.length;j++){
                
                let {match_id,players} = data.result.matches[j]
                
                if(players.filter(x => x.account_id === accountid).length>0){
                    let y = players.filter(x => x.account_id === accountid)[0]
                    let {player_slot} = y
                    z.push({match_id,player_slot})
                }
            }
            
            return(z)
        })
        .catch((e)=>{console.log(e.message);return false});
        if(!Match_History){
            obj.accountid = accountid
            let pre = Object.assign({}, obj, profile);
            result.push(pre);
            if(value.length>1){
                localStorage.setItem('result',JSON.stringify(result))
            }
            return (await result)
        }
        //--
        //Wirate set
        
        for(let k=0;k<100;k++){
            if(Match_History[k] && Match_History[k].match_id){
                let single_match = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchDetails/v1?match_id=${Match_History[k].match_id}&key=${apiKey}`)
                .then((response)=>{return  response.json()})
                .then((data)=>{
                    console.log('search_Match')
                    let {radiant_win,players} = data.result
                    
                    if(radiant_win<2 && players){                
                        let y = players.filter(x => x.account_id === accountid)[0]
                        
                        let {assists,gold_per_min,xp_per_min,kills,deaths,last_hits,denies,hero_damage,hero_healing,net_worth,tower_damage} = y
                        
                        obj.media_assists += assists
                        obj.media_gpm += gold_per_min
                        obj.media_xpm += xp_per_min
                        obj.media_kills += kills
                        obj.media_deaths += -deaths
                        obj.media_last_hists += last_hits
                        obj.media_denies += denies
                        obj.media_hero_damage += hero_damage
                        obj.media_hero_healing += hero_healing
                        obj.media_net_worth += net_worth
                        obj.media_tower_damage += tower_damage
                        obj.match += 1
                        if(radiant_win){if(Match_History[k].player_slot<5){obj.win_rate+=1}}
                        else{if(Match_History[k].player_slot>5){obj.win_rate+=1}}
                        return true
                    }
                    else{return false}
                })
                .catch((error)=>{console.log(error.message);return false}); 
                if(!single_match){
                    console.log('error')
                }
            }
        }
        
        await Object.keys(obj).forEach((key) => {
            if(key!== 'winrate' && key !== obj.ranking_rate && key !== obj.match){
                if(key === 'media_assists'){
                    obj.ranking_rate += obj[key]*5
                }
                else if(key === 'media_kills'){
                    obj.ranking_rate += obj[key]
                }
                else if(key === 'media_deaths'){
                    obj.ranking_rate += obj[key]*0.5 
                }
                else if(key === 'media_hero_damage'){
                    obj.ranking_rate += obj[key]/10 
                }
                else if(key === 'media_net_worth'){
                    obj.ranking_rate += obj[key]/10 
                }
                else if(key === 'media_net_worth'){
                    obj.ranking_rate += obj[key]/10 
                }
                else{
                    obj.ranking_rate += obj[key]
                }                    
            }
            
        });
        obj.accountid = accountid
        //--
        //Resultado return
        let pre_result = Object.assign({}, obj, profile);
        result.push(pre_result)
        if(value.length>1){
            localStorage.setItem('result',JSON.stringify(result))
        }
        //--
    }
    for(let i= result.length; i<value.length;i++){
        console.log('start',i,':',value.length)
        let steamId = await new SteamID(`[U:1:${value[i]}]`)
        let accountid = value[i]
        await search({accountid,steamId})
    } 
    console.log(result)
    return(result)
}
export default SearchSumaryPlayer;