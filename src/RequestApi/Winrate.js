const Winrate = async  ({value,apiKey,hostUrl,proxy,gameMode})=>{
    console.log('Winrate')
    const search = async ()=>{
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
        }   
        for(let i=0;i<1;i++){
            let search_History = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${value}&game_mode=${gameMode}&key=${apiKey}`)
            .then((response)=>{return  response.json()})
            .then((data)=>{
                let x = data.result.matches
                let z = []
                for(let j=0;j<x.length;j++){
                    console.log('History')
                    let {match_id,players} = data.result.matches[j]
                    let y = players.filter(x => x.account_id == value)[0]
                    let {player_slot} = y
                    z.push({match_id,player_slot})
                }
                return(z)
            })
            .catch((error)=>{console.log(error.message);return undefined});
            
            
            for(let k=0;k<100;k++){ 
                let b = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchDetails/v1?match_id=${search_History[k].match_id}&key=${apiKey}`)
                .then((response)=>{return  response.json()})
                .then((data)=>{
                    let {radiant_win,players} = data.result                     
                    let y = players.filter(x => x.account_id == value)[0]
                    
                    let {assists,gold_per_min,xp_per_min,kills,deaths,last_hits,denies,hero_damage,hero_healing,net_worth,tower_damage} = y
                    console.log('obj')
                    obj.media_assists += assists/100
                    obj.media_gpm += gold_per_min/100
                    obj.media_xpm += xp_per_min/100
                    obj.media_kills += kills/100
                    obj.media_deaths += -deaths/100
                    obj.media_last_hists += last_hits/100
                    obj.media_denies += denies/100
                    obj.media_hero_damage += hero_damage/100
                    obj.media_hero_healing += hero_healing/100
                    obj.media_net_worth += net_worth/100
                    obj.media_tower_damage += tower_damage/100
                    
                    if(radiant_win){if(search_History[k].player_slot<5){obj.win_rate+=1}}
                    else{if(search_History[k].player_slot>5){obj.win_rate+=1}}
                    
                })
                .catch((error)=>{console.log(error.message)}); 
            }
            
            Object.keys(obj).forEach((key) => {
                if(key!== 'winrate' && key !== obj.ranking_rate){
                    if(key == 'media_assists'){
                        obj.ranking_rate += obj[key]*100*5
                    }
                    else if(key == 'media_kills'){
                        obj.ranking_rate += obj[key]*100
                    }
                    else if(key == 'media_deaths'){
                        obj.ranking_rate += obj[key]*100*0.5 
                    }
                    else if(key == 'media_hero_damage'){
                        obj.ranking_rate += obj[key]/10 
                    }
                    else if(key == 'media_net_worth'){
                        obj.ranking_rate += obj[key]/10 
                    }
                    else{
                        obj.ranking_rate += obj[key]
                    }                    
                }
            });
            
            obj.ranking_rate = parseInt(obj.ranking_rate*obj.win_rate)
            obj.media_gpm = parseFloat((obj.media_gpm).toFixed(0))
            obj.media_xpm = parseFloat((obj.media_xpm).toFixed(0))
            obj.media_kills = parseFloat((obj.media_kills).toFixed(2))
            obj.media_deaths = parseFloat((obj.media_deaths).toFixed(2))
            obj.media_last_hists = parseFloat((obj.media_last_hists).toFixed(2))
            obj.media_denies = parseFloat((obj.media_denies).toFixed(2))
            obj.media_hero_damage = parseFloat((obj.media_hero_damage).toFixed(0))
            obj.media_hero_healing = parseFloat((obj.media_hero_healing).toFixed(0))
            obj.media_net_worth = parseFloat((obj.media_net_worth).toFixed(0))
            obj.media_tower_damage = parseFloat((obj.media_tower_damage).toFixed(0))
            obj.win_rate = parseFloat((obj.win_rate).toFixed(2))+"%"
            obj.media_assists = parseFloat((obj.media_assists).toFixed(2))
            
        }
        return (obj)
    }  
    const compilation  = await search()
    const result = await compilation
    return(result)
    
}
export default Winrate;

