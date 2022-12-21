function alarm(wake)
{
    var wakeTime = wake.split(":");
    wakeTime[0] = Number(wakeTime[0]);
    wakeTime[1] = Number(wakeTime[1]);
    var wakeSec = ((wakeTime[0]*60)+wakeTime[1])*60;

    var date = new Date();
    var time = [date.getHours(),date.getMinutes(),date.getSeconds()];
    var sec = (((time[0]*60)+time[1])*60)+time[2];

    var first = wakeSec-sec;
    var second = first+30;
    var third = first+45;
    var fourth = first+60;

    setInterval("clockTimer()", 1000);   

    // надежды
    var firstWake = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(console.log("Пора вставать"));
        }, first);
    });
    var secondWake = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(console.log("Желтый"));
        }, second);
    });
    var thirdWake = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(console.log("Красный"));
        }, third);
    });
    var fourthdWake = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(console.log("Проспал"));
        }, fourth);
    });
}

function clockTimer()
{
  var date = new Date();
  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; 
  if (time[0] < 10)
  {
    time[0] = "0"+ time[0];
    }
  if (time[1] < 10)
  {
    time[1] = "0"+ time[1];
    }
  if (time[2] < 10)
  {
    time[2] = "0"+ time[2];
    }
    
  var current_time = [time[0],time[1],time[2]].join(':');
  console.log(current_time);
}


var wakeTime = prompt('Во сколько Вас раздубудить? Указывайте время по типу: 12:12')
alarm(wakeTime);