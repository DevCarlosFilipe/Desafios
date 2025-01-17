var output = $("#output");
var range = $("#range");
var numRange = $("#numRange");


function findSquareLC (val) {
    val = parseInt(val);
    return (val - 1) + val;
}

function makeString(num, squareLC) {
    var string = "";
    for (var i = squareLC; i > 0; i--) {
        string += num.repeat(squareLC) + "<br>";
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