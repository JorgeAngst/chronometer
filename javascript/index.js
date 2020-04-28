const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  console.log('printing')
  return secUni.innerHTML = chronometer.getSeconds()
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList == 'btn start') {
    btnLeft.setAttribute('class', 'btn stop')
    btnLeft.innerHTML = 'STOP'
    chronometer.startClick();
  } else {
    btnLeft.setAttribute('class', 'btn start')
    btnLeft.innerHTML = 'START'
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.classList == 'btn reset') {
      btnRight.setAttribute('class', 'btn split');
      btnRight.innerHTML = 'SPLIT';
    } else {
      btnRight.setAttribute('class', 'btn reset');
      btnRight.innerHTML = 'RESET';
    }
});
