(this["webpackJsonpdota-tryhard"]=this["webpackJsonpdota-tryhard"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),c=a(6),s=a.n(c),i=(a(11),a(1)),o=a.n(i),u=a(2),d=a(4),l=(a(13),function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,n,c,s,i,d,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.value,r=t.apiKey,n=t.hostUrl,c=t.proxy,s=t.gameMode,console.log("Winrate"),i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={win_rate:0,ranking_rate:0,media_gpm:0,media_xpm:0,media_kills:0,media_deaths:0,media_last_hists:0,media_denies:0,media_hero_damage:0,media_hero_healing:0,media_net_worth:0,media_tower_damage:0,media_assists:0},i=o.a.mark((function e(i){var u,d,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c).concat(n,"/IDOTA2Match_570/GetMatchHistory/v1?account_id=").concat(a,"&game_mode=").concat(s,"&key=").concat(r)).then((function(e){return e.json()})).then((function(e){for(var t=e.result.matches,r=[],n=0;n<t.length;n++){console.log("History");var c=e.result.matches[n],s=c.match_id,i=c.players.filter((function(e){return e.account_id==a}))[0].player_slot;r.push({match_id:s,player_slot:i})}return r})).catch((function(e){console.log(e.message)}));case 2:u=e.sent,d=o.a.mark((function e(s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c).concat(n,"/IDOTA2Match_570/GetMatchDetails/v1?match_id=").concat(u[s].match_id,"&key=").concat(r)).then((function(e){return e.json()})).then((function(e){var r=e.result,n=r.radiant_win,c=r.players.filter((function(e){return e.account_id==a}))[0],i=c.assists,o=c.gold_per_min,d=c.xp_per_min,l=c.kills,h=c.deaths,m=c.last_hits,p=c.denies,_=c.hero_damage,f=c.hero_healing,x=c.net_worth,j=c.tower_damage;console.log("obj"),t.media_assists+=i/100,t.media_gpm+=o/100,t.media_xpm+=d/100,t.media_kills+=l/100,t.media_deaths+=-h/100,t.media_last_hists+=m/100,t.media_denies+=p/100,t.media_hero_damage+=_/100,t.media_hero_healing+=f/100,t.media_net_worth+=x/100,t.media_tower_damage+=j/100,n?u[s].player_slot<5&&(t.win_rate+=1):u[s].player_slot>5&&(t.win_rate+=1)})).catch((function(e){console.log(e.message)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})),l=0;case 5:if(!(l<100)){e.next=10;break}return e.delegateYield(d(l),"t0",7);case 7:l++,e.next=5;break;case 10:Object.keys(t).forEach((function(e){"winrate"!==e&&e!==t.ranking_rate&&(t.ranking_rate+="media_assists"==e?100*t[e]*5:"media_kills"==e?100*t[e]:"media_deaths"==e?100*t[e]*.5:"media_hero_damage"==e||"media_net_worth"==e?t[e]/10:t[e])})),t.ranking_rate=parseInt(t.ranking_rate*t.win_rate),t.media_gpm=parseFloat(t.media_gpm.toFixed(0)),t.media_xpm=parseFloat(t.media_xpm.toFixed(0)),t.media_kills=parseFloat(t.media_kills.toFixed(2)),t.media_deaths=parseFloat(t.media_deaths.toFixed(2)),t.media_last_hists=parseFloat(t.media_last_hists.toFixed(2)),t.media_denies=parseFloat(t.media_denies.toFixed(2)),t.media_hero_damage=parseFloat(t.media_hero_damage.toFixed(0)),t.media_hero_healing=parseFloat(t.media_hero_healing.toFixed(0)),t.media_net_worth=parseFloat(t.media_net_worth.toFixed(0)),t.media_tower_damage=parseFloat(t.media_tower_damage.toFixed(0)),t.win_rate=parseFloat(t.win_rate.toFixed(2))+"%",t.media_assists=parseFloat(t.media_assists.toFixed(2));case 24:case"end":return e.stop()}}),e)})),u=0;case 3:if(!(u<1)){e.next=8;break}return e.delegateYield(i(u),"t0",5);case 5:u++,e.next=3;break;case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,i();case 5:return d=e.sent,e.next=8,d;case 8:return l=e.sent,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=a(14),m=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,n,c,s,i,d,l,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.value,r=t.apiKey,n=t.hostUrl,c=t.proxy,t.gameMode,console.log("SearchSumary"),s=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h("[U:1:".concat(a,"]")),console.log(t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,s();case 5:return i=e.sent,d=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c).concat(n,"/ISteamUser/GetPlayerSummaries/v0002/?key=").concat(r,"&steamids=").concat(i)).then((function(e){return e.json()})).then((function(e){var t=e.response.players[0];console.log("x");var a=t.avatarfull,r=(t.loccountrycode,t.personaname),n=t.profileurl,c=t.steamid;t.timecreated;if(void 0!=t)return{avatarfull:a,personaname:r,profileurl:n,steamid:c}})).catch((function(e){return!1}));case 2:return t=e.sent,e.next=5,t;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=9,d();case 9:return l=e.sent,e.next=12,l;case 12:return m=e.sent,e.next=15,m;case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,n,c,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.value,r="048776627077105958873BA4C749CEFF",n="http://api.steampowered.com",c="https://thingproxy.freeboard.io/fetch/",s=18,e.next=7,l({value:a,apiKey:r,hostUrl:n,proxy:c,gameMode:s});case 7:return i=e.sent,e.next=10,m({value:a,apiKey:r,hostUrl:n,proxy:c,gameMode:s});case 10:return u=e.sent,e.abrupt("return",{win:i,player:u});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=a(0),f=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(d.a)(c,2),i=s[0],l=s[1],h=Object(r.useState)(!1),m=Object(d.a)(h,2),f=m[0],x=m[1],j=Object(r.useState)(87683422),b=Object(d.a)(j,2),g=b[0],v=b[1],w=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=11;break}return x(!0),e.next=4,p({value:g});case 4:t=e.sent,a=t.win,r=t.player,x(!1),n(a),l(r),console.log("click");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){}),[]),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;v(t)},placeholder:"ID DOTA"}),Object(_.jsx)("button",{onClick:w,type:"button",children:"Buscar"})]}),a&&i&&Object(_.jsxs)("div",{className:"result",children:[Object(_.jsxs)("div",{className:"cabecalho",children:[Object(_.jsx)("a",{href:i.profileurl,style:{textDecoration:"none",color:"black"},children:Object(_.jsx)("img",{src:i.avatarfull,height:"100%",alt:"a"})}),Object(_.jsx)("h1",{children:i.personaname})]}),Object(_.jsx)("table",{class:"comicGreen",children:Object.keys(a).map((function(e){return"win_rate"!==e&&"ranking_rate"!==e?Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:e}),Object(_.jsx)("td",{children:a[e]})]}):Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:Object(_.jsx)("h1",{children:e})}),Object(_.jsx)("td",{children:Object(_.jsx)("h1",{children:a[e]})})]})}))})]}),f&&Object(_.jsxs)("div",{style:{margin:"80px 0px",height:"50vh"},children:[Object(_.jsx)("h3",{children:"Aguarde pode demorar..."}),Object(_.jsx)("img",{src:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"})]})]})};s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b2c8b4a8.chunk.js.map