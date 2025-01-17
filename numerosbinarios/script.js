var input = $("#input");
var output = $("#output");

function lastCaracter(str) {
    var lastPosition = str.length - 1;
    return str[lastPosition];
}

function novaCasa(str) {
    var count = str.length;
    var zeros = "0".repeat(count);
    return str[0] + zeros;
}
function acharZero(str, bool = true) {
    var count = str.length - 1;
    var resp = false;
    var casa = 0;
    for (let i = count; i > 0; i--) {
        if (count < 2) {
            break;
        }
        if (str[i] == "0") {
            resp = true;
            casa = i;
            break;
        }
    }

    if (bool) {
        return resp;
    } else {
        return casa;
    }
}
function upBinario(num) {
    var res = "";
    if (lastCaracter(num) == "0") {
        res = num.slice(0, -1) + "1";
    } else if (acharZero(num)) {
        var casas = num.length - acharZero(num, false);

        var newCasa = "1" + "0".repeat(casas - 1);
        res = num.slice(0, - casas) + newCasa;
        console.log(acharZero(num));
    } else {
        res = novaCasa(num);
    }
    console.log(res);
    return res;
}

function logic(num) {
    var str = "0";
    for (let i = 0; i < num; i++) {
        str = upBinario(str);
    }
    return str;
}

function conversor(inteiro) {
    inteiro = parseInt(inteiro);
    var retorno = Number.isInteger(inteiro);

    if (retorno) {
        retorno = logic(inteiro);
    } else {
        retorno = "não é número, digite numeros por favor";
    }

    return retorno;
}

input.keyup(function () {
    output.text(conversor(input.val()));
});

input.change(function () {
    output.text(conversor(input.val()));
});
