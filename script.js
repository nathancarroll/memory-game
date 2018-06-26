$(document).ready(onReady);

let i = 0;
let colorSequence = [];
let colors = ['blue', 'green', 'red', 'yellow'];
let j = 0;

function onReady(){
    $('.button').on('click', handleClick);
    setTimeout(levelUp, 1000);
}

function flare(color){
    $('.' + color).addClass('growed');
    setTimeout(function(){
        $('.' + color).removeClass('growed');
    }, 350);
}

function fastFlare(color){
    $('.' + color).addClass('growed');
    setTimeout(function(){
        $('.' + color).removeClass('growed');
    }, 80);  
}

function levelUp(){
    i = 0;
    let newColor = colors[Math.floor(Math.random() * 4)];
    colorSequence.push(newColor);

    displaySequence();
    $('#' + colorSequence[i]).addClass('target');
}

function handleClick(){
    color = $(this).attr('id');
    fastFlare(color);

    if (!$(this).hasClass('target')){
        alert('Game Over!');
        $('h1').empty();
        $('h1').append('Final Score: ' + (colorSequence.length - 1));
        return
    } else {
        $(this).removeClass('target');
        i++;
        if (i === colorSequence.length){
            $('#score').text(colorSequence.length);
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
