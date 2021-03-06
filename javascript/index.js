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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
};

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMillisecons())[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMillisecons())[1];
}

function printSplit() {
  let split = document.createElement('li');
  split.innerHTML = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';

  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';

  chronometer.startClick();
}

function setResetBtn() {
  chronometer.currentTime = 0;
  chronometer.millisecondsTime = 0;
  minDec.innerHTML = '0';
  minUni.innerHTML = '0';
  secDec.innerHTML = '0';
  secUni.innerHTML = '0';
  milDec.innerHTML = '0';
  milUni.innerHTML = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className == 'btn start') {
    setStartBtn()
    setSplitBtn()
  } else {
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.className == 'btn split') {
      printSplit()
    } else {
      setResetBtn();
      clearSplits();
    }
});
