var tower1 = [1,2,3,4,5,6,7,8];
var tower2 = [];
var tower3 = [];

for (var each in tower1){
$('.tower1').append("<div id=gamepiece"+ each + "></div>");}
redotower2 = function(){
for (var each in tower2){
$('.tower2').append("<div id=gamepiece"+ each + "></div>");}
};
redotower3 = function(){
for (var each in tower3){
$('.tower3').append("<div id=gamepiece"+ each + "></div>");}
};
removelowestvalue = function(){
  pieceinmotion=tower1[0];
  /*towerpieceisfrom=this.tower;*/
  $('#gamepiece0').remove();
  tower1.shift();};

$('.tower1').on("click", removelowestvalue);

addstoredvalueto1 = function(){
  tower1.unshift(pieceinmotion);
  piecinmotion=undefined;
};

addstoredvalueto2 = function(){
/*if(pieceinmotion<this.child[0]){
tower2.unshift(pieceinmotion);
pieceinmotion=undefined;
}
else{
towerpieceisfrom.unshift(piecinmotion);
}*/
  tower2.unshift(pieceinmotion);
  pieceinmotion=undefined;
  redotower2();
};

addstoredvalueto3 = function(){
  tower3.unshift(pieceinmotion);
  pieceinmotion=undefined;
  redotower3();};

$('.tower2').on("click", addstoredvalueto2);
$('.tower3').on("click", addstoredvalueto3);

while(tower2===[0,1,2,3,4,5,6,7]){
  console.log("You Won!");
}
while(tower3===[0,1,2,3,4,5,6,7]){
  console.log("You Won!");
}
