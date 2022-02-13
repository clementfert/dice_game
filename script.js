
class Player1{
    constructor(user,score,dice,curent_score){
        this.user='player1';
        this.score=0;
        this.dice=0;
        this.curent_score=0;

    }
}








// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(getRandomInt)