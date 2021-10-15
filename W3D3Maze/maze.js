$(() => {
    'use strict';

    //get buttons first
    let startButton = $('#start');
    let endButton = $('#end');
    let boundaries = $('.boundary');


    startButton.click(() => {
        let beginGame = true;
        $('#status').text('Move mouse to End in order to win the game.');
        boundaries.removeClass('youlose');

        boundaries.mouseover(() => beginGame ? gameLost() : '');

        endButton.mouseover(() => {
            if (beginGame) {
                beginGame = false;
                $('#status').text('Congratulations ! You have won the game. Click S to start gama again.');
            }
        });
        let gameLost = () => {
            beginGame = false;
            boundaries.addClass('youlose');
            $('#status').text('Sorry ! You have lost the game.');
        };
        $('#maze').mouseleave(() => beginGame ? gameLost() : '');
    });
});