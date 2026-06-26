console.log("Execution line number 1");
console.log("Execution line number 2");
console.log("Execution line number 3");
add(5, 10);
console.log("Execution line number 5"); 
console.log("Execution line number 6");
console.log("Execution line number 7");
console.log("Execution line number 8");
console.log("Execution line number 9");
console.log("Execution line number 10");


//Debugging the program step by step.

//1. At the break points (before the line where you want to manually execute the program )
//2. Run the program in debug mode.

//Continue (F5) => Continue the execution till the next break point.
//Stop (Shift + F5) => Stop the execution of the program.
//Restart (Ctrl + Shift + F5) => Restart the execution of the program from the begining

//Step Over (F10) => Execute the current line and move to the next line.
//Step Into (F11) => Go inside the function. Check the internal code.
//Step Out (Shift + F11) => Come out of the function and move to the next line.


function add(a, b) {    
     
    c= a + b;
    console.log(c);
}   