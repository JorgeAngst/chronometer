class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick(callback) {  
    console.log('yeah')  
    const intervalId = setInterval(() => {
      this.currentTime;
      this.getSeconds()
      if(callback) {
      } 
      this.currentTime++
    }, 1000)
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
    console.log(seconds)
    return seconds
  }
  twoDigitsNumber() {
    let min = (this.getMinutes()).toFixed();
    let sec = (this.getSeconds()).toFixed();
    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else if (min < 10) {
      return `${0}${min}:${sec}`
    } else {
      return `${min}:${sec}`;
    }
  }
  stopClick() {
    console.log('stop')
    return clearInterval(this.intervalId);;
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10) {
      return `${0}${min}:${0}${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}
