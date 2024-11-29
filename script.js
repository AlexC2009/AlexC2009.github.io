var input;
var output = [];
function parseInput(){
    //If the action is possible
    if (true){
        //Add input to the end of the running list of outputs
        output.push(input);
        //Do the action corresponding to the input
        if(input == "North"){
            console.log("Action!");
        } else if(input == "South"){
            console.log("Action!");
        } else if(input == "East"){
            console.log("Action!");
        } else if(input == "West"){
            console.log("Action!");
        }
        //Add the parsed input to the outputLog
        //Temporary
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n" + output[output.length-1];
    } 
    else{
        //Otherwise, output an error message
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n Error";
    }
}