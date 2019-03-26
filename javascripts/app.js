// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  X: 0, 
  Y: 0,
  travelog: [],
}

var test = "rffrfflfrff";
var test1 = "rlfflrlf";
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction === "W";
  } else if (rover.direction === "W") {
    rover.direction === "S";
  } else if (rover.direction === "S") {
    rover.direction === "E";
  } else if (rover.direction === "E") {
    rover.direction === "N";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction === "E";
  } else if (rover.direction === "E") {
    rover.direction === "S";
  } else if (rover.direction === "S") {
    rover.direction === "W";
  } else if (rover.direction == "W") {
    rover.direction === "N";
  }
}

function moveForward(rover) {
  console.log("moveForward was called")

  if (rover.direction === "N"){
    rover.Y -= 1;
    console.log('I am here', rover.X, rover.Y)
  } else if (rover.direction === "W") {
    rover.X -= 1;
    console.log('I am here', rover.X, rover.Y)
  } else if (rover.direction === "S") {
    rover.Y += 1;
    console.log('I am here', rover.X, rover.Y)
  } else if (rover.direction === "E") {
    rover.X += 1;
    console.log('I am here', rover.X, rover.Y)
  }
  rover.travelog.push({x: rover.X, y: rover.Y})

}

function commands(test, rover)  {
  console.log("command called");
  for (var i = 0; i < test.length; i++) {
    if (test[i] === "r") {
      turnRight (rover);
    } else if (test[i] === "l") {
      turnLeft (rover);
    } else if (test[i]=== "f") {
      moveForward (rover);
    }
    // switch(test.charAt(i)){
    //   case 'r':
    //     turnRight(rover);
    //   break;
    //   case 'l':
    //     turnLeft(rover);
    //   break;
    //   case 'f':
    //     moveForward(rover);
    //   break;
    // }
  }
  console.log(rover.travelog);
} 

commands(test, rover);
// commands(test1, rover);