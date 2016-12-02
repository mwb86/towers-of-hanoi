var winningtower = [1,2,3,4,5,6,7,8];
var tower1 = [2,3,4,5,6,7,8,9];
var tower2 = [];
var tower3 = [];

var audio = $("#mysoundclip")[0];


drawTower1 = function (){
for (var each in tower1){
$('.tower1').append("<div class ='animated shake' id=gamepiece"+ tower1[each] + "></div>");}

};

redotower2 = function(){
for (var each in tower2){
$('.tower2').append("<div class ='animated shake' id=gamepiece"+ tower2[each] + "></div>");}

};

redotower3 = function(){
for (var each in tower3){
$('.tower3').append("<div class ='animated shake' id=gamepiece" + tower3[each] + "></div>");}

};

drawTower1();

let pieceinmotion = undefined;

interactwithtower1 = function(){
    var temparray=tower1.slice(0);

    if(pieceinmotion === undefined){
    pieceinmotion = tower1.shift();
    $(this).children().remove();
    }
    else if(tower1[0]=== undefined){
      tower1.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else if(pieceinmotion<tower1[0]){
      tower1.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else{
      $(this).children().remove();
    }

checkWinCondition();
drawTower1();
};

interactwithtower2 = function(){
    var temparray=tower2.slice(0);

    if(pieceinmotion === undefined){
    pieceinmotion = tower2.shift();
    $(this).children().remove();
    }
    else if(tower2[0]=== undefined){
      tower2.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else if(pieceinmotion<tower2[0]){
      tower2.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else{
      $(this).children().remove();
    }

checkWinCondition();
redotower2();
};

interactwithtower3 = function(){
    var temparray=tower3.slice(0);

    if(pieceinmotion === undefined){
    pieceinmotion = tower3.shift();
    $(this).children().remove();
    }
    else if(tower3[0]=== undefined){
      tower3.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else if(pieceinmotion<tower3[0]){
      tower3.unshift(pieceinmotion);
      pieceinmotion=undefined;
      $(this).children().remove();
      audio.play();
    }
    else{
      $(this).children().remove();
    }

checkWinCondition();
redotower3();
};

$('.tower1').on("click", interactwithtower1);
$('.tower2').on("click", interactwithtower2);
$('.tower3').on("click", interactwithtower3);

checkWinCondition = function(){
if(tower2.length === winningtower.length){
  alert("You Won!");}
else if(tower3.length===winningtower.length){
  alert("You Won!");}
};
