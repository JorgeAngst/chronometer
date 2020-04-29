class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick() {  
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime;
    if (seconds >= 60) {
      seconds = this.currentTime % 60;
    }
    return seconds
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return `${time}`
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);;
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`
    } else {
      return `${min}:${sec}`
    }
  }
}
