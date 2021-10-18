const Winrate = async  ({PlayersId,apiKey,hostUrl,proxy,gameMode})=>{
    console.log('Winrate')
    const search = async ()=>{
        let player = []        
        for(let i=0;i<1;i++){
            let search_History = await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchHistory/v1?account_id=${PlayersId.BR[i].account_id}&game_mode=${gameMode}&key=${apiKey}`)
            .then((response)=>{return  response.json()})
            .then((data)=>{
                let x = data.result.matches
                let z = []
                for(let j=0;j<x.length;j++){
                    console.log('History')
                    let {match_id,players} = data.result.matches[j]
                    let y = players.filter(x => x.account_id == PlayersId.BR[i].account_id)[0]
                    let {player_slot} = y
                    z.push({match_id,player_slot})
                }
                return(z)
            })
            .catch((error)=>{console.log(error.message);return undefined});
            let obj = {
                winrate : 0,
                med_gpm : 0,
                med_xpm : 0,
                med_kills : 0,
                med_deaths : 0,
                med_lastHists : 0,
                med_denies : 0,
                med_heroDamage : 0,
                med_heroHealing : 0,
                med_netWorth : 0,
                med_towerDamage : 0,
            }
            
            for(let k=0;k<search_History.length;k++){
                
                await fetch(`${proxy}${hostUrl}/IDOTA2Match_570/GetMatchDetails/v1?match_id=${search_History[k].match_id}&key=${apiKey}`)
                .then((response)=>{return  response.json()})
                .then((data)=>{
                    let {radiant_win,players} = data.result    
                    let y = players.filter(x => x.account_id == PlayersId.BR[i].account_id)[0]
                    
                    let {gold_per_min,xp_per_min,kills,deaths,last_hits,denies,hero_damage,hero_healing,net_worth,tower_damage} = y
                    console.log('obj')
                    
                    obj.med_gpm += gold_per_min/100
                    obj.med_xpm += xp_per_min/100
                    obj.med_kills += kills/100
                    obj.med_deaths += deaths/100
                    obj.med_lastHists += last_hits/100
                    obj.med_denies += denies/100
                    obj.med_heroDamage += hero_damage/100
                    obj.med_heroHealing += hero_healing/100
                    obj.med_netWorth += net_worth/100
                    obj.med_towerDamage += tower_damage/100
                    
                    if(radiant_win){if(search_History[k].player_slot<5){obj.winrate+=1/100}}
                    else{if(search_History[k].player_slot>5){obj.winrate+=1/100}}
                    
                })
                .catch((error)=>{console.log(error.message)}); 
            }
            let rankingRate = 0
            Object.keys(obj).forEach((key) => {
                if(key!== 'winrate'){
                    rankingRate += obj[key]
                    console.log(key)
                }
            });
            rankingRate= parseInt(rankingRate*obj.winrate)
            console.log({rankingRate});
            let result = {...PlayersId.BR[i],obj,rankingRate}
            player.push(result)
        }
        return (player)
    }  
    const compilation  = await search()
    const result = await compilation
    console.log(result)
    return('await result')
    
}
export default Winrate;