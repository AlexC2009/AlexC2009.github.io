//Declare variables to get HTML inputs and record outputs
var input;
var output = [];

//Basic gameplay objects
var room = {
    description: "",
    itemsInside = [],
    //Connected rooms
    north: false,
    south: false,
    east: false,
    west: false,
};
var level = {
    rooms: [],
};
var player = {
    //Location
    atLevel: false,
    atRoom: false,
    move: function(direction){
        if (direction == "North"){
            this.atRoom = this.atRoom.north;
        } else if (direction == "South"){
            this.atRoom = this.atRoom.south;
        } else if (direction == "East"){
            this.atRoom = this.atRoom.east;
        } else if (direction == "West"){
            this.atRoom = this.atRoom.west;
        }
    },
    //Inventory
    inventory: [],
    getItem: function(item){
        this.inventory.push(item);
    }
};

//Level One create
var l1 = new level;
    var l1r1 = new room;
        l1r1.description = "Room One";
        l1r1.north = "l1r2";
    var l1r2 = new room;
        l1r2.description = "Room Two";
        l1r1.south = "l1r1";
l1.rooms = [l1r1, l1r2];
//Spawn in at l1r1
player.atLevel = l1;
player.atRoom = l1r1;

function parseInput(){
    //If the action is possible, canDo is true
    var canDo;
    if(input == "North" && player.atRoom.north != false){
        canDo = true;
    } else if(input == "South" && player.atRoom.south != false){
        canDo = true;
    } else if(input == "East" && player.atRoom.east != false){
        canDo = true;
    } else if(input == "West" && player.atRoom.west != false){
        canDo = true;
    } else{
        canDo = false;
    }
    
    if (canDo == true){
        //Add input to the end of the running list of outputs
        output.push(input);
        //Do the action corresponding to the input
        if(input == "North"){
            player.move("North");
        } else if(input == "South"){
            player.move("South");
        } else if(input == "East"){
            player.move("East");
        } else if(input == "West"){
            player.move("West");
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