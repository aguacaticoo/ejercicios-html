var variableGlobal = 5;

function miFuncion() {
    var variableLocal = "El valor es ";
    alert(variableLocal + variableGlobal);
}

miFuncion();

alert(variableLocal);