const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");
const timeTxt = document.getElementById("timeTxt");

function getTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    if(hours > 12){
        timeTxt.innerHTML = hours-12 + ":";
    }else{
        timeTxt.innerHTML = hours + ":";
    }

    if(minutes < 10){
        timeTxt.innerHTML += "0" + minutes;
    }else{
        timeTxt.innerHTML += minutes;
    }


    secondsHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
    minutesHand.style.transform = "rotate(" + (minutes * 6 + seconds/10) + "deg)";
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes/2) + "deg)";
}

const interval = setInterval(()=>{
    getTime();
}, 100);