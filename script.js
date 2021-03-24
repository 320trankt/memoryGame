//global constants
const clueHoldTime = 500;
const cluePauseTime = 333;
const nextClueWaitTime = 500;

//Global Variables
var pattern = [1, 2, 3, 4, 3, 2, 1, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var attempts = 3;
var attemptsDisplayString = "Attempts Remaining: ";

function startGame() {
  //initialize game variables
  progress = 0;
  attempts = 3;
  document.getElementById("attemptsDisplay").innerText = attemptsDisplayString + attempts;
  gamePlaying = true;
  randomizePattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("attemptsDisplay").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //end game
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("attemptsDisplay").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guess: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {//if player guesses right
    if (guessCounter == progress) {//if turn is over
      if (progress == pattern.length - 1) {//if last turn
        winGame();
        return;
      }else{//not last turn
        progress++;
        playClueSequence();
      }
    }else{//turn is not over
      guessCounter++;
    }
  } else {//if player guesses wrong
    decrementAttempts();
    if (attempts == 0){
      loseGame();
      return;
    }else{
      playClueSequence();
    }
  }
}

function winGame() {
  stopGame();
  alert("You won! Good job!");
}

function loseGame() {
  stopGame();
  alert("You've run out of attempts! Game over.");
}

function randomizePattern(){
  for (let i = 0; i <= pattern.length-1; i++){
    console.log("randomize: " + i + "th entry of pattern");
    pattern[i] = Math.floor((Math.random() * 4) + 1);
  }
}

function decrementAttempts(){
  attempts--;
  document.getElementById("attemptsDisplay").innerText = attemptsDisplayString + attempts;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 523.25
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
