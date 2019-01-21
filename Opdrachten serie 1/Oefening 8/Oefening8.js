// Vraag de gebruiker om zijn leeftijd in te voeren. Als hij ouder is dan 18 jaar, toon: " U bent meerderjarig ". Anders verschijnt " U bent minderjarig ".

let leeftijd = () => {
    let num = document.getElementById("age").value;
    if (num >= 18) {
        alert("U bent meerderjarig")
    } else {
        alert("U bent minderjarig")
    }
};