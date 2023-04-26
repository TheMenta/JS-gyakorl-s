window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll("section:nth-child(1) h2")[0];
    console.log(ELEM);
}


function elemekElerese2() {
    const elem = document.getElementById('ide');
    const pElem = document.createElement('p');
    pElem.textContent = 'Jó reggelt!';
    elem.appendChild(pElem);
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
}