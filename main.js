window.onload = function() {
    var myShakeEvent = new Shake({
        threshold: 15
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    function shakeEventDidOccur () {
    var result = document.getElementById("result");
    result.className = "result";
    var arr = ['Thinkpad Notebook','Iphone6 Plus','Great dinner','Football'];
    var num = Math.floor(Math.random()*4);
    result.innerHTML = "Congratulations, you get "+arr[num]+"!";
    setTimeout(function(){
            result.className = "result result-show";
        }, 1000);
    }
};