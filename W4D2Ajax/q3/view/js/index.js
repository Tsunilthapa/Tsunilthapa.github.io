
function addToCart() {
    let data = {
        name: $("#name").val(),
        price: $("#price").val(),
    };

    $.post({
        url: '/addToCart',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done((res) => {
        $('.message').text('Product added to the cart');
        $(".message").css("backgroundColor", "green");;

        $('#cartProdCount').text(res.cartProductCount);
    }).fail(() => {
        $('.message').text("Sorry, something went wrong");
        $(".message").css("backgroundColor", "red");;

    });


    return false;
};