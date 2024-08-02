// caluclator program
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function caluclate(){
    try{
    display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
} 
function myFunction() {
    document.getElementById("caluclator").style.backgroundImage = "url(bg3.jpg)";
    
}