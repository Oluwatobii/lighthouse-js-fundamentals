//Writing a program that prints the numbers from 100 to 200
var i = 100;
// while loop with a stop condition
while (i <= 200) {
    if (i % 3 === 0 && i % 4 === 0) {
        console.log("LoopyLighthouse");
    }else if (i % 4 === 0) {
        console.log("Lighthouse");
    }else if (i % 3 === 0) {
        console.log("Loopy");
    }
    else {
        console.log(i);
    }
    // increment i at the end of each loop
    i = i + 1 ; 
}