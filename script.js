const boton_numeros = document.getElementsByName('data-number');
const boton_operation = document.getElementsByName('data-operation');
const boton_equals = document.getElementsByName('data-equals')[0];
const boton_clear = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('result');

var op_actual ='';
var op_anterior = '';
var operacion = undefined;




boton_numeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    });
});

boton_operation.forEach(function (boton) {
    boton.addEventListener('click', function () {
        select_operation(boton.innerText);
    });
});

function calcular(){
    var calculo;
    const anterior = parseFloat(op_anterior);
    const actual = parseFloat(op_actual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    op_actual = calculo;
    operacion = undefined;
    op_anterior = '';
};

boton_equals.addEventListener('click', function(){
    calcular();
    actualizar_display();
});

boton_clear.addEventListener('click', function(){
    clear();
    actualizar_display();
});

function agregarNumero(numero){
    op_actual = op_actual.toString() + numero.toString();
    actualizar_display();
};

function clear(){
    op_actual= '';
    op_anterior = '';
    operacion = undefined;
};

function actualizar_display(){
    resultado.value = op_actual;
};

function select_operation(op){
    if (op_actual == '') return;
    if (op_anterior != ''){
        calcular()
    };
    operacion = op.toString();
    op_anterior = op_actual;
    op_actual = '';
};

