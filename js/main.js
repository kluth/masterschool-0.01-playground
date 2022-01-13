function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(x){
    var message = "";
    for (var i = 1; i <= x; i++){
        message += makeLine(i);
    }
    return message;
}
console.log(buildTriangle(5))

function triangle(x)
var line = "";
for ( var i = 1; i <= x; i++){
    for (var j = 1; j <= i; j++){
        line += "* ";
    }
    line += '\n'
}
return line;
console.log(triangle(5));

"* \n * * \n * * * \n"

noch drin? Ja aber ohne audio 
