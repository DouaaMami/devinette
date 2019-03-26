console.log('Bienvenue au jeu');
var sol=Math.floor(Math.random()*100);
console.log(sol);
var tent=0;
var nb=Number(prompt('donner un numero')); 
while ((nb!== sol) && (tent<8))
   { 
    if (nb<sol) 
    {console.log('faux! vous avez donné un nombre plus petit que la solution ');}
    else 
    {console.log('faux! vous avez donné un nombre plus grand que la solution ');}
    tent++;
    var nb=Number(prompt('donner un numero'))
} 
