const display=document.getElementById("display");
let [secs,mins,hrs]=[0,0,0];
let timer=null;

function watch(){
secs++;
if(secs== 60){
    secs=0;
    mins++
        if(mins == 60){
        mins=0
        hrs++;
        }
    }

    let h=hrs < 10 ? "0" + hrs : hrs;
    let m=mins < 10 ? "0" + mins : mins;
    let s=secs < 10 ? "0" + secs : secs;

    display.innerHTML = h+":"+m+":"+s;
}

function start(){
    if(timer!==null){
        clearInterval(timer);
    }
  timer= setInterval(watch,1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    [secs,mins,hrs]=[0,0,0];
    display.innerHTML="00:00:00";
}

function lap(){
    if(timer!==null){
        let laps=document.getElementById("laps");
        laps.innerHTML=laps.innerHTML+display.innerHTML;
        laps.innerHTML=laps.innerHTML+"<br><br>";
    }
}