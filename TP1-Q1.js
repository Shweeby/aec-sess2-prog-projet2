let ligne = Number(prompt("Donner un nombre de lignes pour votre sapin"));
let star;
let space = "&nbsp;";

for (let i = 0; i < ligne; i++) {
    //Boucle qui génère les espaces
        space = Array(ligne-i-1).fill("&nbsp;&nbsp;").join(' ');

    //Boucle qui génère les étoiles
        star = Array(i * 2 + 1).fill("*").join(' ');

    //console.log(space + star);
    document.getElementById("app").innerHTML += space + star + "<br>";

}