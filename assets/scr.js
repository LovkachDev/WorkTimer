function timer() {

    let myTimer = setInterval(myClock, 1000);
    var c = 3600;
    function myClock() {
        --c;
        let seconds = c % 60;
        if ( seconds < 10 )
        {
            seconds = '0' + seconds;
        }
        let secondsInMinutes = (c - seconds) / 60;
        let minutes = secondsInMinutes % 60;
        document.getElementById("timer").innerHTML =  minutes + ":" + seconds;
        start = document.getElementById("start");
        start.innerHTML = 'Start over';
        start.onclick = function()
        {
            start = location.reload();
        }
        if (c == 0) {
            clearInterval(myTimer);
            playSound();
        }
        btn = document.getElementById("stop");
        btn.onclick = function()
        {
            clearInterval(myTimer);
            document.getElementById("stop").innerHTML = 'Return';
            if ( btn.innerHTML == 'Return')
            {
                btn.onclick = function()
                {
                    Return();
                    document.getElementById("stop").innerHTML = 'Stop';
                }
            }
        }
        
    function Return()
    {
        myTimer = setInterval(myClock, 1000);
    }
}
}
function playSound()
{
    let sound = new Audio("sound.mp3");
    sound.volume = 0.5;
    sound.play();
}

