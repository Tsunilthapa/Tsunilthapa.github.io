$(function () {

    let growthSize = 1;
    let interval = 100;
    let width = 10;
    let circlesCount = 10;


    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;

    }

    $("#start").click(function () {
        width = parseInt($("#width").val());
        growthSize = parseInt($("#growthAmount").val());
        interval = parseInt($("#interval").val());
        circlesCount = parseInt($("#noOfCircles").val());


        if (circlesCount > 0) {

            for (let i = 1; i <= circlesCount; i++) {

                let newCircle = $("<div>");
                newCircle.css({
                    "background-color": getRandomColor(),
                    "position": "absolute",
                    "top": Math.floor(Math.random() * 100) + "%",
                    "right": Math.floor(Math.random() * 100) + "%"
                });

                $("body").append(newCircle);

                setInterval(increeaseCircleSize, interval);

                $("div").click(function () {
                    $(this).remove();
                });

                $("div").hover(function () {
                    $(this).css('opacity', '0.6');


                }, function () {
                    jQuery('div').css('opacity', '1');

                });
            }

        }

    });


    function increeaseCircleSize() {
        $("div").css("height", width + "px");
        $("div").css("width", width + "px");
        width += growthSize;
    }
});

