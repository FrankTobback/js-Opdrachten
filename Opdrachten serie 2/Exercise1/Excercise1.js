let surfaceRectangle = () => {
    let lengte = parseInt(prompt("lengte", "lengte invullen"));
    let breedte = parseInt(prompt("breedte", "Breedte invullen"));
   alert("oppervlakte is " + (lengte * breedte) + "cm");
};

let perimeterRectangle = () => {
    let lengte = parseInt(prompt("lengte", "lengte invullen"));
    let breedte = parseInt(prompt("breedte", "breedte invullen"));
    alert("omtrek is" + ((lengte + breedte)*2) + "cm");
}