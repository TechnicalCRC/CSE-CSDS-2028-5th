let a = 106;

let add = function(x, y, z=0){
    console.log("Add is " + (x+y+z));
}

module.exports.a = a;
module.exports.b = 205;
module.exports.add = add;