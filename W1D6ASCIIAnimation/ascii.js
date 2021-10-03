window.onload = function () {
    // document.getElementById('text-area').disabled = true;
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var animationType = document.getElementById('animation');

    var animationSpeed = 250;
    var currentAnimeLength = 0;
    var totalAnimeLength = 0;


    var animationContentArray;
    var printAnimation = function () {
        if (currentAnimeLength >= totalAnimeLength) {
            currentAnimeLength = 0;
        }
        document.getElementById('text-area').innerHTML = animationContentArray[currentAnimeLength++];
    }


    var interval = null;
    start.onclick = function () {
        stop.disabled = false;
        start.disabled = true;
        var animeColl = ANIMATIONS[animationType.value];
        animationType.disabled = true;
        animationContentArray = animeColl.split("=====\n");
        totalAnimeLength = animationContentArray.length;
        interval = setInterval(printAnimation, animationSpeed);

    }
    stop.onclick = function () {
        stop.disabled = true;
        start.disabled = false;
        animationType.disabled = false;
        clearAnimeData();
    }

    function clearAnimeData() {
        // document.getElementById('text-area').innerHTML = "";
        animationContentArray = [];
        animationSpeed = 250;
        clearInterval(interval);
    }

    animationType.onchange = function () {
        showInitialText();

    }

    function showInitialText() {
        document.getElementById('text-area').innerHTML = ANIMATIONS[animationType.value];
    }

    var textFontsize = document.getElementById('fontsize');
    function fontSizeChange() {
        document.getElementById('text-area').style.fontSize = fontsize.value;
    }
    textFontsize.onchange = fontSizeChange;


    document.getElementById("turbo").onclick = function () {
        if (document.getElementById('turbo').checked) {
            animationSpeed = 50;
        } else {
            animationSpeed = 250;
        }

        if (interval != null) {
            clearInterval(interval);
            interval = setInterval(printAnimation, animationSpeed);

        }
    }
}