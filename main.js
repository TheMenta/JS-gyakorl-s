window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    felsorolasGeneralas();
    formazas();
});

function elemekElerese1() {
    const ELEM = document.getElementById(`f1`); //így működik 
    //const ELEM = document.getElementById("section:nth-child(1) h2")[0]; 
    //*let html = document.getElementById("f1").innerHTML; nem mukodik hibat ír ki
    console.log(ELEM);
}


function elemekElerese2() {
    const elem = document.getElementById('ide'); //id alapján keressük meg
    const pElem = document.createElement('p'); //új p elemet hozz létre
    pElem.textContent = 'Jó reggelt!'; // létrehoztuk a szöveget
    elem.appendChild(pElem); // bele injectaljuk
}
function elemekElerese3() {
    const elem = document.getElementsByClassName('ide')[0]; //class alapján keressük meg indexel!!
    const pElem = document.createElement('p');
    pElem.textContent = 'Jó reggelt!';
    elem.appendChild(pElem);
}
function felsorolasGeneralas() {
        const listaElem = document.getElementsByClassName("lista") [0]; //class alapjan.
        let content = "<ul>"; //felsorolasba
        for (let i = 0; i < 5; i++) { //for ciklusba generalom le
          const randomNumber = Math.floor(Math.random() * 21) + 10; // feltét 10-30 közötti számok generálása.
          content += `<li>${randomNumber}</li>`;// li be rakjuk a szamokat
        }
        content += "</ul>"; // bezarjuk az ul felsorolast
        listaElem.innerHTML = content; //bele injectáljuk, viszont ez erősebb, azaz felül tudom írni
  }
  function formazas() {
    const Elem = document.getElementsByClassName("lista")[0];
    Elem.classList.add("formazott"); //
  }
  