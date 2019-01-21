/* Vermenigvuldig de lengte met 2
Voeg 5 toe aan het resultaat
Vermenigvuldigen met 50
Trek het geboortejaar af
Voeg aan het resultaat 1766 toe. */

let info = () => {
    let height = document.getElementById("height").value;
    let birthdate = document.getElementById("birthdate").value;
    let number = (((height*2)+5)*50)-birthdate;
    let answer = Number(number+1766);
    alert(answer);
};

