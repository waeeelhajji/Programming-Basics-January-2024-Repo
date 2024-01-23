// ======= FOOR ==========

// === General Syntax
// 3S
// Start ==  initialization
// Stop == condition
// Steps == final Expression

// Recipe
// for(StaticRange,stop,steps){

// }

for(var i = 0; i < 10 ; i++ ){ // 10
    // console.log(i)

}
i++ // increment the car value by 1
i = i +1
i+= 1
console.log(i)
//               0            1           2       3
// animals[0]
for(var i = animals.length-1 ; i>=0 ;i--){
    console.log(animals[i]) // 0 => animals[1] ==> animals[2]  
}
var animals = ['Red Panda', 'Elephant', 'Koala', 'Bear'];

for(var i = 0 ; i<= animals.length-1 ; i++){
    if(animals[i] === 'Koala'){
        console.log("hey we found your koala")
        break;
    }else{
        console.log("this is not your koala")
    }

}


/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2024
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 28 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 28 years of JAVASCRIPT! 🎈🎈🎈"

 */