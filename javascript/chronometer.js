class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.millisecondsTime = 0;
    this.intervalId = 0;
    this.intervalMillId = 0;
  }
  startClick() {  
    this.intervalMillId = setInterval(() => {
      this.millisecondsTime++;
      printTime()
    }, 10);
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
    return seconds
  }
  getMillisecons() {
    let milliseconds = Math.floor(this.millisecondsTime % 100)
    return milliseconds;
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return `${time}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMillId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let mil = this.getMillisecons();

   return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(mil)}`
  }
}
