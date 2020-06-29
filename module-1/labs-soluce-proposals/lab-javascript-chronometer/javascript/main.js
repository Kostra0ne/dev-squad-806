var chrono = new Chronometer();
// buttons
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
// time display
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
// splits
var splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function formatTime(time, dec, uni) {
  dec.textContent = time[0];
  uni.textContent = time[1];
}

function printMinutes() {
  formatTime(chrono.twoDigitsNumber(chrono.getMinutes()), minDec, minUni);
}

function printSeconds() {
  formatTime(chrono.twoDigitsNumber(chrono.getSeconds()), secDec, secUni);
}

function printMilliseconds() {
  formatTime(chrono.twoDigitsNumber(chrono.getMilliSeconds()), milDec, milUni);
}

function printSplit() {
  splits.innerHTML += `<li>${chrono.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.onclick = () => {
  if (btnLeft.classList.contains("start")) {
    chrono.startClick(() => printTime());
    setStopBtn();
    setSplitBtn();
  } else {
    chrono.stopClick();
    setStartBtn();
    setResetBtn();
  }
};

// Reset/Split Button
btnRight.onclick = () => {
  if (btnRight.classList.contains("reset")) {
    chrono.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
};
