class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval((() => {
      this.currentTime++;
      if (printTimeCallback != undefined){
        printTimeCallback();
      }
    }), 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    let minutes = Math.floor(this.currentTime/6000);
    return Math.floor((this.currentTime - (minutes * 6000)) / 100);
  }

  getCentiseconds() {
    let minutes = Math.floor(this.currentTime/60000);
    let seconds = Math.floor((this.currentTime - (minutes * 6000)) / 100)
    return this.currentTime - ((minutes * 60000) + (seconds * 100))
  }

  computeTwoDigitNumber(value) {
    let value2d =[];
    if ((value / 10) < 1){
      value2d = value.toString().split("");
      value2d.unshift("0");
      value2d = value2d.join("");
      return (value2d);
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
