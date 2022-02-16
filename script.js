
class Partie {
    constructor(user,score,dice,curent_score,right){
        this.user=user;
        this.score=score;
        this.dice= dice;
        this.curent_score=curent_score;
        this.right=right;

    }


}
// les deux variable de type objet que nous allons utiliser dans ce petit jeu 
var player1;
var player2;




function initalisation(){

            //initalisation des joueur
             player1 = new Partie('player1', 0 , null , 0 , true );
             player2 = new Partie('player2', 0 , null , 0 , false );
            //alerte la partie commence on indique à l'user que le joueur 1 commence
            alert('la partie va débuter le joueur 1 commence');
            $('#player1').css('color','red');
            $('#current_score1').html(player1.curent_score);
            $('#current_score2').html(player2.curent_score);
            $('#score1').html(player1.score);
            $('#score2').html(player2.score);

    
            console.log (player1);
            console.log (player2);
    
    
            return player1, player2 ;
}
// la fonction rolle permet de miser on indique à l'utilisateur le joueur actif en le colorant le player en rouge
function rolle(player1, player2){

    if (player1.right === true){

        player1.dice = getRandomInt();
        console.log(player1.dice);
        showDice(player1,player2);

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
        console.log(player2.dice);
        showDice(player1,player2);

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

// la fonction hold permet de sauvegarder son score courant
// dans on verifie à qui est le tour
// puis on lance le dé si le de est superieur à 1 donc 0 on incremente le score current et le joueur garde la main 
function hold(player1,player2){

     if ((player1.score + player1.curent_score) >= 100){
        alert('le joueur 1 à gagné');
        player1.score=0;
        player2.score=0;
        player1.curent_score=0;
        player2.curent_score=0;
        player1.right=false;
        player2.right=false;

        return player1, player2
    }

    else if ((player2.score +player2.curent_score) >= 100){
        alert('le joueur 2 à gagné');
        player1.score=0;
        player2.score=0;
        player1.curent_score=0;
        player2.curent_score=0;
        player1.right=false;
        player2.right=false;

        return player1, player2
    }

    else if ((player1.right=== true) && (player1.score<100)){

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

    else if ((player2.right=== true) && (player2.score<100)){

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


    
    }
//cette fonction permet d'afficher le resultat du dé systeme grace au fonction hide/show
    function showDice(player1,player2){
        $("#dice_0").hide();
        $("#dice_2").hide();
        $("#dice_3").hide();
        $("#dice_4").hide();
        $("#dice_5").hide();
        $("#dice_6").hide();

        if (player1.right===true){
           $(`#dice_${player1.dice}`).show();
         }
         else if (player2.right === true ){
            $(`#dice_${player2.dice}`).show();

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
// un petit console log pour verifier les resultat du dé sur la console
console.log(getRandomInt())




// l'utilisation de jquerry pour communiqué avec la page html
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


       





