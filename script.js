
class Partie {
    constructor(user,score,dice,curent_score,right){
        this.user=user;
        this.score=score;
        this.dice= dice;
        this.curent_score=curent_score;
        this.right=right;

    }


}

var player1;
var player2;



function initalisation(){

            //initalisation des joueur
             player1 = new Partie('player1', 0 , null , 0 , true );
             player2 = new Partie('player2', 0 , null , 0 , false );
            //alerte la partie commence on indique à l'user que le joueur 1 commence
            alert('la partie va débuter le joueur 1 commence');
            $('#player1').css('color','red');
    
            console.log (player1);
            console.log (player2);
    
    
            return player1, player2 ;
}

function rolle(player1, player2){

    if (player1.right === true){

        player1.dice = getRandomInt();
        console.log(player1.dice)

        if( player1.dice >0){
            player1.curent_score = player1.curent_score + player1.dice;
            $("#current_score1").html(player1.curent_score);  

            return player1;

        }
        else if (player1.dice === 0){
        player1.curent_score=0;
        player1.right=false;
        $('#player1').css('color','black');
        player2.right=true;
        $('#player2').css('color','red');
        $("#current_score1").html(player1.curent_score); 

        return player1, player2;
        }
    }


    else if (player2.right === true){

        player2.dice = getRandomInt();

        if( player2.dice >0){
            player2.curent_score = player2.curent_score + player2.dice;
            $("#current_score2").html(player2.curent_score); 
            return player2;
        }
        else if (player2.dice===0){
                        
        player2.curent_score=0;
        player2.right=false;
        $('#player2').css('color','black');
        player1.right=true;
        $('#player1').css('color','red');
        $("#current_score2").html(player2.curent_score); 

        return player1,player2;

        }
    }
}


function hold(player1,player2){

    if (player1.right=== true){

        player1.score =  player1.score + player1.curent_score;
        player1.curent_score = 0;
        player1.right = false;
        player2.right = true;
        $("#current_score1").html(player1.curent_score); 
        $("#score1").html(player1.score); 
        $('#player1').css('color','black');
        $('#player2').css('color','red');
        return player1 , player2;
    }

    else if (player2.right=== true){

        player2.score =  player2.score + player2.curent_score;
        player2.curent_score = 0;
        player2.right = false;
        player1.right = true;
        $("#current_score2").html(player2.curent_score); 
        $("#score2").html(player2.score); 
        $('#player1').css('color','red');
        $('#player2').css('color','black');
        return player1 , player2;
    }
    else if (player1.score >= 100){
        alert('le joueur 1 à gagné');
        player1.score=0;
        player2.score=0;
        player1.curent_score=0;
        player2.curent_score=0;
        player1.right=false;
        player2.right=false;

        return player1, player2
    }
    else if (player2.score >= 100){
        alert('le joueur 2 à gagné');
        player1.score=0;
        player2.score=0;
        player1.curent_score=0;
        player2.curent_score=0;
        player1.right=false;
        player2.right=false;

        return player1, player2
    }

    
    }




// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    let result = Math.floor(Math.random() * (max - min)) + min;
    if (result > 1){
        return result;
        }
    else
        {
    return 0; 
        }
        
    }

console.log(getRandomInt())





$(()=>{

    $('#new_game').click (function(){
        initalisation();
    });


    $('#rolle_dice').click(function(){
        rolle(player1 ,player2);
    });

    $('#hold').click(function(){
        hold(player1 ,player2);
    });


});


       





