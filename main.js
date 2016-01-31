window.onload = function() {
    var myShakeEvent = new Shake({
        threshold: 10
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    function shakeEventDidOccur () {
    var result = document.getElementById("result");
    result.className = "result";
    var arr = ['watermelon','rice','ramen','poultry_leg', 'mushroom', 'lollipop', 'hamburger', 'grapes', 'fried_shrimp', 'donut', 'curry', 'corn', 'dango', 'bread', 'apple', 'pizza'];
    var num = Math.floor(Math.random()*16);
    result.innerHTML = "You'll eat "+arr[num]+" today!";

    document.getElementById("emoji").className = "em em-"+arr[num];
    setTimeout(function(){
            result.className = "result result-show";
        }, 1000);
    }
};