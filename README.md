<h1>Tower of Hanoi</h1>
"The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower, and sometimes pluralized) is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes which can slide onto any rod.....The puzzle was invented by the French mathematician Édouard Lucas in 1883. There is a story about an Indian temple in Kashi Vishwanath which contains a large room with three time-worn posts in it surrounded by 64 golden disks. Brahmin priests, acting out the command of an ancient prophecy, have been moving these disks, in accordance with the immutable rules of the Brahma, since that time. The puzzle is therefore also known as the Tower of Brahma puzzle. According to the legend, when the last move of the puzzle will be completed, the world will end. It is not clear whether Lucas invented this legend or was inspired by it."
https://en.wikipedia.org/wiki/Tower_of_Hanoi
<br>
<h2>_Play my verion of the game here:_</h2> https://mwb86.github.io/towers-of-hanoi/#
<br>


To play this game you go to the New Game menu and select the number of discs. 4 discs is the easiest setting. Additional discs will make the game exponentially longer. You click on the first tower of discs and it removes the top one. You then place this piece by clicking on one of the other towers. It is against the rules to place this piece on top of a piece that is smaller. Win the game by moving the whole set of discs to one of the other towers.

<h1>Building the game</h1>

The first thing I did was think about the logic of the game. It breaks down to 3 arrays and the interaction between them.

1)The player is only allowed to pick(.shift()) one value at a time (var pieceInMotion).

2)The value will be placed or removed from the beginning of the clicked array(the top of the tower selected).

3)The value of pieceInMotion must be less than the first value in the array(tower) selected for placing the disc.

4)The game stops amd declares a win when the original tower1(var winningtower is tower1 before any disc moves) is equal to either of the other arrays (tower1, tower2)

5)The player is presented these arrays in the form of towers with the wood disc images. This allows them to visually interpret the arrays through volume instead of a number. These towers are interactive and allow the user to affect the arrays with clicks.

My game consists of HTML, CSS, animate.css(https://daneden.github.io/animate.css/), Javascript, and Jquery.
The interactivity is created through click events that activate for loops and if/else statements. These are controlling the data in the arrays and printing the data to the browser in the form of wood discs on towers.

<h1>Unsolved problems</h1>

1)My page is not designed for mobile yet. Some of the things move to the wrong place when the screen shrinks.

2)I want to condense the code more.

3)I'd like to add a timer to go with the moves counter.

4)The last thing I want to add is an ability to close the game and come back to it later with the pieces in the same place.
