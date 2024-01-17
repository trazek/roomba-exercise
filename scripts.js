const turnRightButton = document.querySelector("#turn");
const goForwardButton = document.querySelector("#forward");
const roombaElement = document.querySelector(".roomba");

const initDirection = "up";
const directions = ["up", "right", "down", "left"];
let currentX = 0;
let currentY = 0;
let currentDirection = 0;

function turnRight() {
  const directionCount = directions.length;
  //remove current direction class
  roombaElement.classList.remove(directions[currentDirection]);

  //point to new direction
  currentDirection++;

  if (currentDirection > directionCount - 1) {
    currentDirection = 0;
    roombaElement.classList.add(initDirection);
  } else {
    roombaElement.classList.add(directions[currentDirection]);
  }
}

turnRightButton.addEventListener("click", turnRight);

goForwardButton.addEventListener("click", () => {
  const directionClass = directions[currentDirection];

  if (directionClass === "right") {
    currentX += 1;
  } else if (directionClass === "left") {
    currentX -= 1;
  }

  if (directionClass === "up") {
    currentY -= 1;
  } else if (directionClass === "down") {
    currentY += 1;
  }

  if (directionClass === "right" && currentX > 9) {
    currentX = 9;
    turnRight();
  }

  if (directionClass === "down" && currentY > 9) {
    currentY = 9;
    turnRight();
  }

  if (directionClass === "left" && currentX < 0) {
    currentX = 0;
    turnRight();
  }

  if (directionClass === "up" && currentY < 0) {
    currentY = 0;
    turnRight();
  }

  const moveToColumn = document.querySelector(
    `.Grid > .Column:nth-child(${currentX + 1})`
  );
  const moveToCell = moveToColumn.querySelector(
    `.Cell:nth-child(${currentY + 1})`
  );
  console.log(currentX, currentY, moveToColumn, moveToCell);

  moveToCell.appendChild(roombaElement);
});
