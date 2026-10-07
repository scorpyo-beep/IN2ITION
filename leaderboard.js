window.IN2ITION_LEADERBOARD={
get(){return JSON.parse(localStorage.getItem("in2ition_scores")||"[]")},
add(category,points,time){let a=this.get();a.push({category,points,time,date:new Date().toISOString()});a.sort((x,y)=>y.points-x.points);localStorage.setItem("in2ition_scores",JSON.stringify(a.slice(0,50)))},
points(){return this.get().sort((a,b)=>b.points-a.points).slice(0,10)},
time(){return this.get().filter(x=>x.time>0).sort((a,b)=>a.time-b.time).slice(0,10)}
};