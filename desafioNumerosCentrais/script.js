var output = $("#output");
var range = $("#range");
var numRange = $("#numRange");

function resultString(){
    return "1";
}

output.text("1");
range.keyup(function () {
    numRange.text(range.val())
});

range.change(function () {
    numRange.text(range.val())
});