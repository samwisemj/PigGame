/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// var dice = Math.floor(Math.random()*6)+1;
// console.log(dice);
// var x;


// document.querySelector('#current-'+activeplayer).textContent=dice;//# is for id
// document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>';

// x=document.querySelector('#score-0').textContent;
// console.log(x);

// document.querySelector('.dice').style.display='none';//removes da dice //. is for class

//event selector
// document.querySelector('.btn-roll').addEventListener('click',function (){
    //do something here
// });


// document.querySelector('#btn').addEventListener('click',function (){
//     window.location.replace("http://google.com");
//     window.location.href = "http://stackoverflow.com";
//     //console.log("f");
// });
//


var scores=[0,0];
var roundscore=0;
var activeplayer=0;

//----setting all values to zero
fnnew();
function fnnew(){
    document.getElementById('btn-roll').style.display="block";
    document.getElementById('btn-hold').style.display="block";
    document.getElementById('dice').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

scores=[0,0];
roundscore=0;
activeplayer=0;}

function checkScore() {

    if(scores[0]>=100 || scores[1]>=100) {
        if (scores[0] >= 100)
            alert("Player 1 is the winner");
        else
            alert("Player 2 is the winner");
    document.getElementById('btn-roll').style.display="none";
    document.getElementById('btn-hold').style.display="none";
    }
}

function updatechanges(){

    scores[activeplayer]+=roundscore;
    document.getElementById('score-'+activeplayer).textContent=parseInt(scores[activeplayer]);
    document.getElementById('current-'+activeplayer).textContent=0;

    roundscore=0;


    //control change

    var inactiveplayer=activeplayer===0?1:0;
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    document.querySelector('.player-'+inactiveplayer+'-panel').classList.add('active');

    activeplayer=activeplayer===0?1:0;

};

//document.getElementById('current-0').textContent=90;

document.getElementById("btn-new").addEventListener('click',fnnew);




document.getElementById('btn-roll').addEventListener('click',function () {
    var dice = Math.floor(Math.random()*6)+1;
    document.querySelector(".dice").style.display="block";
    document.querySelector(".dice").src="dice-"+dice+".png"
    if(dice===1)
    {
        roundscore=0;
        document.getElementById('current-'+activeplayer).textContent=0;
        updatechanges();
    }
    else
    {
        roundscore+=dice;
        document.getElementById('current-'+activeplayer).textContent=roundscore;
    }

});


document.getElementById('btn-hold').addEventListener('click',function () {

    updatechanges();
    checkScore();

});





