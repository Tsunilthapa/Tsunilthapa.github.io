$(() => {
    $("#magic8").on("submit", () => {
        $.get({
            url: "/8ball",
            data: "",
            contentType: "application/json; charset=utf-8",
        })
            .done(showAnswer)
            .fail(showError);
        return false;
    });

    const showAnswer = (data) => {
        $("#question").val(data);
        $(question).select();
    };
    const showError = (err) => {
        console.log("error occurred" + err);
    };
    $("#question").focus(function () {
        $(this).select();
    });
});