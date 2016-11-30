var tower1 = [1,2,3,4,5,6,7,8];
var tower2 = [];
var tower3 = [];

drawTower1 = function (){
for (var each in tower1){
$('.tower1').append("<div id=gamepiece"+ tower1[each] + "></div>");}
};

redotower2 = function(){
for (var each in tower2){
$('.tower2').append("<div id=gamepiece"+ tower2[each] + "></div>");}
};

redotower3 = function(){
for (var each in tower3){
$('.tower3').append("<div id=gamepiece"+ tower3[each] + "></div>");}
};

drawTower1();

let pieceinmotion = undefined;

interactwithtower1 = function(){
if(pieceinmotion === undefined){
pieceinmotion = tower1.shift();
/*$('#gamepiece0').remove();*/
$(this).children().remove();
}
else if(pieceinmotion != undefined){
  $('.tower1').empty();
  tower1.unshift(pieceinmotion);
  pieceinmotion=undefined;
}
drawTower1();
};

interactwithtower2 = function(){
  if(pieceinmotion ==  undefined){
  pieceinmotion = tower2.shift();
  $(this).children().remove();
  }
  else if(pieceinmotion != undefined){
    tower2.unshift(pieceinmotion);
    pieceinmotion=undefined;
    $(this).children().remove();
  }
redotower2();
};

interactwithtower3 = function(){
  if(pieceinmotion ==  undefined){
  pieceinmotion = tower3.shift();
  $(this).children().remove();
  }
  else if(pieceinmotion != undefined){
    tower3.unshift(pieceinmotion);
    pieceinmotion=undefined;
    $(this).children().remove();
  }
redotower3();
};
/*
interactwithtower1 = function(){
  pieceinmotion=tower1[0];
  $('#gamepiece0').remove();
  tower1.shift();
};
addstoredvalueto1 = function(){
  tower1.unshift(pieceinmotion);
  pieceinmotion=undefined;
};

interactwithtower2 = function(){
  tower2.unshift(pieceinmotion);
  pieceinmotion=null;
  redotower2();
};
interactwithtower3 = function(){
  tower3.unshift(pieceinmotion);
  pieceinmotion=undefined;
  redotower3();
};

*/


$('.tower1').on("click", interactwithtower1);
$('.tower2').on("click", interactwithtower2);
$('.tower3').on("click", interactwithtower3);

while(tower2===[0,1,2,3,4,5,6,7]){
  console.log("You Won!");
}
while(tower3===[0,1,2,3,4,5,6,7]){
  console.log("You Won!");
}
