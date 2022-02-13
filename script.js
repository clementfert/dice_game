
class Partie{
    constructor(user,score,dice,curent_score){
        this.user= null;
        this.score=0;
        this.dice=0;
        this.curent_score=0;

    }
}


$(()=>{
    $('#new_game').click (function(){

        let first_launch = new Partie('player1',0,0,0);
        let player2 = new Partie('player2',0,0,0);

         first_launch.curent_score = first_launch.curent_score + getRandomInt();
        
        alert('la partie commence votre premier lancer est ' + first_launch.curent_score );

        $('#current_score1').html(first_launch.curent_score);
        $('#player1').css('color','red');


        $('#rolle_dice').click(function(){
            if (first_launch.curent_score >0 ){
    
                first_launch.curent_score = first_launch.curent_score + getRandomInt();
                $('#current_score1').html(first_launch.curent_score);
    
            }
            else {
                first_launch.curent_score=0;
                $('#current_score1').html(first_launch.curent_score);

            }
    
        });

      





  

    });








});



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
       





