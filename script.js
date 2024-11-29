var input;
var output = [];
function parseInput(){
    if(input == "North"){
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n North";  
    } else if(input == "South"){
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n South";  
    } else if(input == "East"){
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n East";  
    } else if(input == "West"){
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n West";  
    } else {
        document.getElementById("outputLog").innerHTML = "Huh?";
    }
}