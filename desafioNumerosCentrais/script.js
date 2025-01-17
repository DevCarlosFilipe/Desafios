var output = $("#output");
var range = $("#range");
var numRange = $("#numRange");


function findSquareLC (val) {
    val = parseInt(val);
    return (val - 1) + val;
}

function makeLine (num, squareLC, line) {
    var string;
    if (line == squareLC || line == 1) {
        string = num.repeat(squareLC) + "<br>";
    } else {
        var subnum = num - 1;
        console.log(subnum)
        string = num + subnum.toString().repeat(squareLC - 2) + num + "<br>";
    }
    return string;
}

function makeString(num, squareLC) {
    var string = "";
    
    // definindo linha para cada repetição
    for (var i = squareLC; i > 0; i--) {
        string += makeLine (num, squareLC, i);
    }

    return string
}

function resultString(val){
    var squareLC = findSquareLC(val);
    var string = makeString(val, squareLC)
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