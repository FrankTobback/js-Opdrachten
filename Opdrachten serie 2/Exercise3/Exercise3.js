const a = 3;
const b = 2;

function triple(x) {
    x *= 3;
    alert(x);
}

document.getElementById('display').onclick = function display(){
    triple(a);
    triple(b);
};
