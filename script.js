$(document).ready(onReady);

let i = 0;
let colorSequence = [];
let colors = ['blue', 'green', 'red', 'yellow'];
let j = 0;

function onReady(){
    // setInterval(flare('green'), 1000);
    // setInterval(flare(), 2000, 'red');
    $('.button').on('click', handleClick);
    setTimeout(levelUp, 1000);
}

function flare(color){
    $('.' + color).addClass('growed');
    setTimeout(function(){
        $('.' + color).removeClass('growed');
    }, 350);
}

function levelUp(){
    i = 0;
    let newColor = colors[Math.floor(Math.random() * 4)];
    colorSequence.push(newColor);

    displaySequence();
    $('#' + colorSequence[i]).addClass('target');
}

function handleClick(){
    if (!$(this).hasClass('target')){
        console.log('Game Over!');
        console.log('Final Score: ', colorSequence.length - 1);
    } else {
        $(this).removeClass('target');
        i++;
        if (i === colorSequence.length){
            // console.log('You win!');
            setTimeout(levelUp, 1000);
        }
        $('#' + colorSequence[i]).addClass('target');
    }
}

function displaySequence(){
    if (j <= colorSequence.length){
        flare(colorSequence[j]);
        j++;
        setTimeout(displaySequence, 500);
    } else {
        j = 0;
        return
    }
}
