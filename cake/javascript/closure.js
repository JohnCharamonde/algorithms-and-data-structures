//what will the console show...

var text = 'outside';
function logIt(){

    console.log(text);
    var text = 'inside';
};
logIt();

// undefined


// what will the console show..
var text = 'outside';
function logIt(){
    console.log(text);
    text = 'inside';
};
logIt();
logIt();

// outside
// inside


var text = 'outside';
function logIt(){
    var text; // same as line 6(29)... declaration get's hoisted to line 5, but assignment stays on line 6(31)
    console.log(text);
    text = 'inside';
};
logIt();
logIt();

// undefined
// undefined