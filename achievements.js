window.IN2ITION_ACHIEVEMENTS=[
{id:"numbers_easy",title:"Number Starter",desc:"Complete Numbers.",icon:"🔢"},
{id:"numbers_medium",title:"Number Solver",desc:"Complete Numbers.",icon:"🧮"},
{id:"numbers_hard",title:"Number Master",desc:"Complete Numbers Hard.",icon:"🏅"},
{id:"colours_easy",title:"Colour Spark",desc:"Complete Colours.",icon:"🎨"},
{id:"colours_medium",title:"Colour Mind",desc:"Complete Colours.",icon:"🌈"},
{id:"colours_hard",title:"Colour Master",desc:"Complete Colours Hard.",icon:"💎"},
{id:"animals_easy",title:"Animal Rookie",desc:"Complete Animals.",icon:"🐾"},
{id:"animals_medium",title:"Animal Expert",desc:"Complete Animals.",icon:"🦁"},
{id:"animals_hard",title:"Animal Master",desc:"Complete Animals Hard.",icon:"🦅"},
{id:"random_master",title:"IN2ITION Master",desc:"Complete the final Random challenge.",icon:"🎲"},
{id:"daily_3",title:"Daily Thinker",desc:"Complete 3 daily challenges.",icon:"⚡"},
{id:"weekly_master",title:"Weekly Master",desc:"Complete 9 weekly clues.",icon:"🔥"},
{id:"perfect",title:"Perfect Run",desc:"Answer all clues correctly.",icon:"💯"},
{id:"collector",title:"Badge Collector",desc:"Unlock 10 achievements.",icon:"👑"}];
function getProgress(){return JSON.parse(localStorage.getItem("in2ition_progress")||"{}")}
function saveProgress(p){localStorage.setItem("in2ition_progress",JSON.stringify(p))}
function unlockAchievement(id){const p=getProgress();p.badges=p.badges||[];if(!p.badges.includes(id)){p.badges.push(id);saveProgress(p);return true}return false}