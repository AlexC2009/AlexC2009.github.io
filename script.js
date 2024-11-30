//Declare variables to get HTML inputs and record outputs
var input;
var output = [];

//Other variables
var movements = ["North", "South", "East", "West", "Up", "Down", "Northeast", "Northwest", "Southeast", "Southwest"];

//Basic gameplay objects as constructor functions
function Room(){
    //Connected rooms
    this.north = false;
    this.south = false;
    this.east = false;
    this.west = false;
    this.up = false;
    this.down = false;
    this.northEast = false;
    this.northWest = false;
    this.southEast = false;
    this.southWest = false;
    //Blockages (Doors or otherwise)
    this.northDoor = false;
    this.southDoor = false;
    this.eastDoor = false;
    this.westDoor = false;
    this.upDoor = false;
    this.downDoor = false;
    this.northEastDoor = false;
    this.northWestDoor = false;
    this.southEastDoor = false;
    this.southWestDoor = false;
    //Items
    this.northWallFurniture = [];
    this.southWallFurniture = [];
    this.eastWallFurniture = [];
    this.westWallFurniture = [];
    this.description = "";
}
function Level(){
    this.rooms = [];
}
//Furniture types
function Chair(){
    this.inReach = true;
    this.contents = [];
}
function Table(){
    this.inReach = true;
    this.contents = [];
}
//Items
function Item(){
    this.useItem = function(){
        console.log("Item Used!");
    }
}
//Player object
var Player = {
    //Location
    atLevel: false,
    atRoom: false,
    riding: "none",
    move: function(direction){
        if (direction == "North"){
            this.atRoom = this.atRoom.north;
        } else if (direction == "South"){
            this.atRoom = this.atRoom.south;
        } else if (direction == "East"){
            this.atRoom = this.atRoom.east;
        } else if (direction == "West"){
            this.atRoom = this.atRoom.west;
        } else if (direction == "Up"){
            this.atRoom = this.atRoom.up;
        } else if (direction == "Down"){
            this.atRoom = this.atRoom.down;
        } else if (direction == "Northeast"){
            this.atRoom = this.atRoom.northeast;
        } else if (direction == "Northwest"){
            this.atRoom = this.atRoom.northWest;
        } else if (direction == "Southeast"){
            this.atRoom = this.atRoom.southEast;
        } else if (direction == "Southwest"){
            this.atRoom = this.atRoom.southWest;
        } else {
            //Teleport to specified room if not a direction
            this.atRoom = direction;
        }
    },
    //Inventory
    inventory: [],
    getItem: function(item){
        this.atRoom.itemsInside.pop(item);
        this.inventory.push(item);
    }
};

//Level creation functions
function linkNorthSouth(North, South){
    South.north = North;
    North.south = South;
}
function linkEastWest(East, West){
    West.east = East;
    East.west = West;
}
function linkUpDown(Up, Down){
    Up.down = Down;
    Down.up = Up;
}
function linkNESW(Northeast, Southwest){
    Northeast.southwest = Southwest;
    Southwest.northeast = Northeast;
}
function linkNWSE(Northwest, Southeast){
    Northwest.southeast = Southeast;
    Southeast.northwest = Northwest;
}

//Level One create
var L1 = new Level();
var L1R1 = new Room();
var L1R2 = new Room();
var L1R3 = new Room();
var L1R4 = new Room();
var L1R5 = new Room();
L1R1.description = "Room One";
L1R2.description = "Room Two";
L1R3.description = "Room Three";
L1R4.description = "Room Four";
L1R5.description = "Room Five";
linkNorthSouth(L1R2,L1R1);
linkEastWest(L1R3, L1R2);
linkUpDown(L1R4,L1R3);
linkNESW(L1R5, L1R4);
linkNWSE(L1R1, L1R5);
L1.rooms = [L1R1, L1R2, L1R3, L1R4, L1R5];
for(var i = 0; i < L1.rooms.length; i++){
    L1.rooms[i].northWallFurniture.push(eval("var table" + i + "= new Table()"));
}
table3.contents.push("Potato");

//Spawn in at l1r1
Player.atLevel = L1;
Player.atRoom = L1R1;

//Parsing
function canDo(action){
    //If the action is possible, canDo is true
    if(action == "North" && Player.atRoom.north != false && Player.atRoom.northDoor == false){
        return true;
    } else if(action == "South" && Player.atRoom.south != false && Player.atRoom.southDoor == false){
        return true;
    } else if(action == "East" && Player.atRoom.east != false && Player.atRoom.eastDoor == false){
        return true;
    } else if(action == "West" && Player.atRoom.west != false && Player.atRoom.westDoor == false){
        return true;
    } else if(action == "Up" && Player.atRoom.up != false && Player.atRoom.upDoor == false){
        return true;
    } else if(action == "Down" && Player.atRoom.down != false && Player.atRoom.downDoor == false){
        return true;
    } else if(action == "Northeast" && Player.atRoom.northEast != false && Player.atRoom.northEastDoor == false){
        return true;
    } else if(action == "Northwest" && Player.atRoom.northWest != false && Player.atRoom.northWestDoor == false){
        return true;
    } else if(action == "Southeast" && Player.atRoom.southEast != false && Player.atRoom.southEastDoor == false){
        return true;
    } else if(action == "Southwest" && Player.atRoom.southWest != false && Player.atRoom.southWestDoor == false){
        return true;
    } else{
        return false;
    }
}
function parseInput(){
    if (canDo(input)){
        //Add input to the end of the running list of outputs
        output.push(input);
        //Do the action corresponding to the input
        if(movements.includes(input)){
            Player.move(input);
        }
        //Output the result of the action
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n" + output[output.length-1];
        if (movements.includes(input)){
            document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n" + Player.atRoom.description;
        }
    } 
     //Otherwise, output an error message
    else{
        document.getElementById("outputLog").innerHTML = document.getElementById("outputLog").innerHTML + "\n Error";
    }
}