var output = $("#output");
var range = $("#range");
var numRange = $("#numRange");

function findSquareLC (val) {
    calc = Number.isInteger(val);
    console.log(val - 1 + calc)
    return calc;
}
function resultString(val){
    var string = findSquareLC(val);
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