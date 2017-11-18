// Lucas Martin Calderon

var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [[0,0]],
  grid: [['1', null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null]]
};

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
    rover.direction = 'W';
    break;
    case 'S':
    rover.direction = 'E';
    break;
    case 'W':
    rover.direction = 'S';
    break;
    case 'E':
    rover.direction = 'N';
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
    rover.direction = 'E';
    break;
    case 'S':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'N';
    break;
    case 'E':
    rover.direction = 'S';
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case 'N':
    rover.grid[rover.x][rover.y] = null;
    rover.y -= 1;
    rover.travelLog += [[rover.x, rover.y]];
    rover.grid[rover.x][rover.y] = '1';
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'S':
    rover.grid[rover.x][rover.y] = null;
    rover.y += 1;
    rover.travelLog += [[rover.x, rover.y]];
    rover.grid[rover.x][rover.y] = '1';
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'W':
    rover.grid[rover.x][rover.y] = null;
    rover.x -= 1;
    rover.travelLog += [[rover.x, rover.y]];
    rover.grid[rover.x][rover.y] = '1';
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'E':
    rover.grid[rover.x][rover.y] = null;
    rover.x += 1;
    rover.travelLog += [[rover.x, rover.y]];
    rover.grid[rover.x][rover.y] = '1';
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case 'N':
    y += 1;
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'S':
    y -= 1;
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'W':
    x += 1;
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
    case 'E':
    x -= 1;
    console.log('The rover position is at x-axis: ' + x + ' and y-axis: ' + y);
    break;
  }
}

function commands(stringCommands){
  var count = 0;
  if (stringCommands === null){
    console.log('Please enter a valid string of commands!');
  }  else if (validateString(stringCommands) === 1){
    console.log('Please enter either F, B, R or L for different directions!');
  } else {
  for (var i = 0; i < stringCommands.length; i++){
    switch ((stringCommands[i].toUpperCase())) {
      case 'F':
        moveForward();
        if (obstaclesAndRovers()) { console.log('The command number: ' + count + ' will make you go off-grid, it will automatically go back to the previous position that did not cause any trouble...'); moveBackward();}
        break;
        case 'B':
        moveBackward();
        if (obstaclesAndRovers()) { console.log('The command number: ' + count + ' will make you go off-grid, it will automatically go back to the previous position that did not cause any trouble...'); moveForward();}
        break;
        case 'R':
        turnRight();
        break;
        case 'L':
        turnLeft();
        break;
    }
    count++;
  }
  console.log('travelLog for the rover (starting @ [0 , 0]): ' + travelLog);
}
}

function validateString(stringCommands){
  for(var i = 0; i < stringCommands.length; i++){
    if (stringCommands[i].toUpperCase() !== 'F' || stringCommands[i].toUpperCase() !== 'B' || stringCommands[i].toUpperCase() !== 'R' || stringCommands[i].toUpperCase() !== 'L') {
      flag = 1;
    } else {
      flag = 0;
    }
  }
  return flag;
}

function obstaclesAndRovers(rover) {
  if ((rover.grid[rover.x][rover.y] === undefined) || (rover.grid[rover.x][rover.y] === 1)) {
    return true;
  } else {
    return false;
  }
}
