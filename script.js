var winningtower = [];
var tower1 = [];
var tower2 = [];
var tower3 = [];
var pieceinmotion = undefined;
var audio = $("#mysoundclip")[0];

drawTower1 = function() {
    for (var each in tower1) {
        $('.tower1').append("<div class ='animated shake' id=gamepiece" + tower1[each] + "></div>");
    }
};
drawTower2 = function() {
    for (var each in tower2) {
        $('.tower2').append("<div class ='animated shake' id=gamepiece" + tower2[each] + "></div>");
    }
};
drawTower3 = function() {
    for (var each in tower3) {
        $('.tower3').append("<div class ='animated shake' id=gamepiece" + tower3[each] + "></div>");
    }
};

interactwithtower1 = function() {
    if (pieceinmotion === undefined) {
        pieceinmotion = tower1.shift();
        $(this).children().remove();
    } else if (tower1[0] === undefined) {
        tower1.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else if (pieceinmotion < tower1[0]) {
        tower1.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else {
        $(this).children().remove();
    }
    drawTower1();
};

interactwithtower2 = function() {
    if (pieceinmotion === undefined) {
        pieceinmotion = tower2.shift();
        $(this).children().remove();
    } else if (tower2[0] === undefined) {
        tower2.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else if (pieceinmotion < tower2[0]) {
        tower2.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else {
        $(this).children().remove();
    }
    checkWinCondition();
    drawTower2();
};

interactwithtower3 = function() {
    if (pieceinmotion === undefined) {
        pieceinmotion = tower3.shift();
        $(this).children().remove();
    } else if (tower3[0] === undefined) {
        tower3.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else if (pieceinmotion < tower3[0]) {
        tower3.unshift(pieceinmotion);
        pieceinmotion = undefined;
        $(this).children().remove();
        audio.play();
    } else {
        $(this).children().remove();
    }
    checkWinCondition();
    drawTower3();
};

$('.tower1').on("click", interactwithtower1);
$('.tower2').on("click", interactwithtower2);
$('.tower3').on("click", interactwithtower3);

checkWinCondition = function() {
    if (tower2.length === winningtower.length) {
        alert("You Won!");
    } else if (tower3.length === winningtower.length) {
        alert("You Won!");
    }
};

changeDifficulty = function() {
    tower1 = [];
    tower2 = [];
    tower3 = [];
    $('#alltowers').children().children().remove();
    for (i = 0; i < this.id; i++) {
        tower1.push(i + 1);
        winningtower.push(i + 1);
    }
    drawTower1();
    drawTower2();
    drawTower3();
};
$('.dropdown-content').children().on("click", changeDifficulty);
