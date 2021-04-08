// Fonction pour sortir un nombre random compris entre lowest et highest.
function rand(lowest, highest){// On déclare la fonction rand qui prend deux arguments, lowest et highest
  var adjustedHigh = (highest - lowest) + 1; // On utilise le mathfloor juste en dessous, donc on réhausse de 1 les valeurs.
  return Math.floor(Math.random()*adjustedHigh) + parseFloat(lowest); // Fonction pour sortir un chiffre / nmbr pseudo random entre 1 et 6 dans notre cas.
}


alert('Welcome to Medieval War X Thunder Warrior'); // Première alert, message de bienvenue au joueur

let pvJoueur = 20; // On déclare les pv de base du joueur
let pvStreum = 20; // On déclare les pv de base du streum
let deg; // On déclare la variable deg, qui correspondra au dégats infligés.


while(pvJoueur > 0 || pvStreum > 0){ // Bouble while qui s'exécute tant que la var pvJoueur est sup à 0 ou que la var pvStreum est sup à 0
  deg = rand(1, 6); // On appelle notre fonction de rand et on stock ça dans la var deg
  pvJoueur = pvJoueur - deg; // On retire deg à pvJoueur. 
  if(pvJoueur <= 0) { // Check de pvJoueur, si inférieur ou égal à 0, le jeu prend fin et le monstre gagne.
    pvJoueur = 0; // On attribue la valeur 0 à pvJoueur, celà évite l'affichage de HP négatifs en cas d'overkill
    alert('Monster hits you for ' + deg + ' DMG. You now have ' + pvJoueur + ' HP. You lose, Streum wins !'); // Alert finale, défaite
    break;
  }
  alert('Monster hits you for ' + deg + ' DMG.\nYou now have ' + pvJoueur + ' HP and the monster has ' + pvStreum + ' HP.'); // Le joueur n'est pas mort, on affiche les dégats infligés puis un résumé des HP
  deg = rand(1, 6); // On appelle notre fonction de rand et on stock ça dans la var deg
  pvStreum = pvStreum - deg; // On retire deg à pvStreum. 
  if(pvStreum <= 0) { // Check de pvStreum, si inférieur ou égal à 0, le jeu prend fin et le joueur gagne.
    pvStreum = 0; // On attribue la valeur 0 à pvStreum, celà évite l'affichage de HP négatifs en cas d'overkill
    alert('You hit the monster for ' + deg + ' DMG. He now has ' + pvStreum + " HP. You win, Streum's dead !"); // Alert finale, victoire
    break;
  }
  alert('You hit the monster for ' + deg + ' DMG.\nYou have ' + pvJoueur + ' HP and the monster now has ' + pvStreum + ' HP.'); // Le monstre n'est pas mort, on affiche les dégats infligés puis un résumé des HP
}