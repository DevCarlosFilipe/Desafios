var output = $("#output");
var range = $("#range");
var numRange = $("#numRange");

function findSquareLC(val) {
    val = parseInt(val);
    return val - 1 + val;
}

function makeLine(num, squareLC, line) {
    var string = "";
    var carac = num;
    var sqNow = squareLC;
    var inverter = false;
    var run = false;

    for (var i = squareLC; i > 0; i--) {
        if (
            i < squareLC
        ) {
            run = true;
        } else {
            run = false;
        }

        if(carac == 1) {
            inverter = true;
        }

        if (run) {
            if (inverter) {
                carac++;
            } else {
                carac--;
            }
        } 


        string += carac;
    }

    return string;
}

function makeString(num, squareLC) {
    var string = "";

    // definindo linha para cada repetição
    for (var i = squareLC; i > 0; i--) {
        string += makeLine(num, squareLC, i) + "<br>";
    }

    return string;
}

function resultString(val) {
    var squareLC = findSquareLC(val);
    var string = makeString(val, squareLC);
    return string;
}

// Ativação de função com redundância, uma para cada cenário de alteração de valor Ao Vivo
range.mousemove(function () {
    numRange.text(range.val());
    output.html(resultString(range.val()));
});

range.change(function () {
    numRange.text(range.val());
    output.html(resultString(range.val()));
});
