const display=document.querySelector('.display');
const startBtn=document.querySelector('.start');
const stopBtn=document.querySelector('.stop');
const resetBtn=document.querySelector('.reset');

let startTime,intervalId;

//Define the start function that starts the timing.

function start(){
    startTime=Date.now();
    console.log("Hello")
    intervalId=setInterval(()=>{           // update time every 10ms

        const elapsedTime= Date.now() -startTime;
        const seconds= Math.floor(elapsedTime/1000)
        const minutes = Math.floor(seconds/60)
        const hours=Math.floor(minutes/60)
        const formattedTime = `${pad(hours)}:${pad(minutes)}: ${pad(seconds)}`;
        //HH:MM:SS  // combine the timings
        display.textContent=formattedTime;
    },10)
    console.log("Hello")
    console.log(intervalId)

}

function stop(){
    clearInterval(intervalId)
}

function reset(){
    clearInterval(intervalId)
    display.textContent="00:00:00";
}

function pad(number){  //adding a leading zero to a numver if it less tgen 10
    return number<10 ? '0'+number:number;
}

startBtn.addEventListener('click',start)
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);