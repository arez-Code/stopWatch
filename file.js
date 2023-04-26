window.onload = function(){
  var seconds = 00;
  var minuts = 00;
  let hour = 00;
  let appendHour = document.getElementById('hour');
  var appendminuts = document.getElementById('minuts');
  var appendsecond = document.getElementById('seconds');
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,1000);
  }
  buttonStop.onclick = function(){
    clearInterval(Interval)
  }
  buttonReset.onclick = function(){
    clearInterval(Interval)
    minuts = '00';
    seconds = '00';
    appendminuts.innerHTML = minuts;
    appendsecond.innerHTML = seconds;
  }
  function startTimer(){
    seconds++;
    if(seconds <= 9){
      appendsecond.innerHTML = '0' + seconds;
    }
    if(seconds > 9){
      appendsecond.innerHTML = seconds;
    }
    if(seconds > 59){
      minuts++;
      seconds = 0;
      appendsecond.innerHTML = '0' + 0;
      appendminuts.innerHTML = '0' + minuts;
    }
    if(minuts > 9){
      appendminuts.innerHTML = minuts;
    }
    if(minuts > 59){
      hour++;
      minuts = 0;
      seconds = 0;
      appendminuts.innerHTML = '0' + 0;
      appendsecond.innerHTML = '0' + 0;
      appendHour.innerHTML = '0' + hour;
    }
    if(hour > 9){
      appendHour.innerHTML = hour;
    }
  }
}