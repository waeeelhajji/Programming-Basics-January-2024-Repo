// ===Functions =====


// f    name parm
function great(){
    // Logic
    // console.log("Hello")
    return "Hello from the return "
}
// Function is Equal to ITS Returns
var fun = great

console.log(fun)

// call the function / invoke to work

// ================= Parameter
function GreateSomone(persone){
    // console.log("Hello",persone)
    return "Hello " + persone 
}
// ========= Input
var Aziz = 
console.log(GreateSomone(Aziz))


var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];
function FindTheKoala(par){

for(var i = 0 ; i<= par.length-1 ; i++){
    if(par[i] === 'Koala'){
        console.log("hey we found your koala")
        break;
    }else{
        console.log("this is not your koala")
    }

}
}
FindTheKoala(animals)

var fruits = ["🍉","🍊","🍌","🍍","🍑","🍒","🍈","🍇","🐾"]

function LoopOveTheIngredians(Parameter){
    for(var i = 0;i<=Parameter.length-1;i++){
        console.log(Parameter[i])
    }
}
LoopOveTheIngredians(fruits)


var number = [33,55,77,-22,789,1000,22]
// Build a finction to find the largest Number in The Array

function FindTheLargest(lar){

    var largest = 0
    for(var i = 0; i<=lar.length-1;i++){
        console.log("Largest ==>",largest)
        console.log("Lar[i] ===>",lar[i])
        console.log("----------------------")
        if(lar[i]> largest){
            largest = lar[i]
        }
    }
    return largest


}

FindTheLargest(number)
