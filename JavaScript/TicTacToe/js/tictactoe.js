// === Global Variables ===
let activePlayer = 'X'; // Track current player (X or O)
let selectedSquares = []; // Track moves on the board
let gameOver = false; // Flag to block further moves if game is over
let gameMode = 'pvp'; // 'pvp' = Player vs Player, 'cpu' = Player vs Computer

// === Set game mode from radio button selection ===
function setGameMode(mode) {
  gameMode = mode;
  resetGame();
}

// === Function to handle a player move ===
function placeXOro(squareNumber) {
  if (gameOver) return false; // If game over, do nothing

  if (!selectedSquares.some(element => element.includes(squareNumber))) {
    let selected = document.getElementById(squareNumber);
    if (!selected) return;

    // Set image based on player
    if (activePlayer === 'X') {
      selected.style.backgroundImage = 'url("images/X.png")';
    } else {
      selected.style.backgroundImage = 'url("images/O.png")';
    }

    // Save the move
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions(); // Check for a win or tie

    if (gameOver) return true; // Stop if game is over

    // Switch player
    activePlayer = (activePlayer === 'X') ? 'O' : 'X';
    audio('./media/leaf-throw.wav');

    // If playing vs CPU and it's O's turn, trigger CPU move
    if (gameMode === 'cpu' && activePlayer === 'O') {
      disableClick();
      setTimeout(() => computerTurn(), 1000);
    }

    return true;
  }
}

// === Function for computer move logic ===
function computerTurn() {
  let success = false;
  let pickASquare;

  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9));
    if (placeXOro(pickASquare)) {
      success = true;
    }
  }
}

// === Function to check all win/tie conditions ===
function checkWinConditions() {
  const winAudio = './media/victory-fanfare.wav';
  const loseAudio = './media/Lose.mp3';

  // === Helper to play win or lose audio and reset ===
  function declareWin(player) {
    gameOver = true;
    audio(player === 'X' ? winAudio : loseAudio);
    setTimeout(() => resetGame(), 1000);
  }

  // === All win condition combinations ===
  if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); declareWin('X'); }
  else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); declareWin('X'); }
  else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); declareWin('X'); }
  else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); declareWin('X'); }
  else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); declareWin('X'); }
  else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); declareWin('X'); }
  else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); declareWin('X'); }
  else if (arrayIncludes('2X', '4X', '6X')) { drawWinLine(100, 508, 510, 90); declareWin('X'); }
  else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); declareWin('O'); }
  else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); declareWin('O'); }
  else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); declareWin('O'); }
  else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); declareWin('O'); }
  else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); declareWin('O'); }
  else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); declareWin('O'); }
  else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); declareWin('O'); }
  else if (arrayIncludes('2O', '4O', '6O')) { drawWinLine(100, 508, 510, 90); declareWin('O'); }

  // === Check for tie ===
  else if (selectedSquares.length >= 9) {
    gameOver = true;
    audio('./media/tie.mp3');
    setTimeout(() => resetGame(), 1000);
  }

  // === Helper to check if 3 moves are made by one player ===
  function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    return a && b && c;
  }
}

// === Reset game board and state ===
function resetGame() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).style.backgroundImage = '';
  }
  selectedSquares = [];
  gameOver = false;
  activePlayer = 'X';
}

// === Play audio file ===
function audio(audioURL) {
  const audio = new Audio(audioURL);
  audio.play();
}

// === Draw animated win line ===
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById('win-lines');
  const c = canvas.getContext('2d');
  let x1 = coordX1,
      y1 = coordY1,
      x2 = coordX2,
      y2 = coordY2,
      x = x1,
      y = y1;

  gameOver = true;
  disableClick();
  audio('./media/victory-fanfare.wav');

  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();

    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) x += 10;
      if (y < y2) y += 10;
      if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
    }
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) x += 10;
      if (y > y2) y -= 10;
      if (x >= x2 && y <= y2) cancelAnimationFrame(animationLoop);
    }

    if (Math.abs(x - x2) <= 10 && Math.abs(y - y2) <= 10) {
      cancelAnimationFrame(animationLoop);
      setTimeout(() => {
        c.clearRect(0, 0, 608, 608);
        resetGame();
      }, 1000);
    }
  }

  animateLineDrawing();
}

// === Temporarily disable user input ===
function disableClick() {
  document.body.style.pointerEvents = 'none';
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto';
  }, 1000);
}
