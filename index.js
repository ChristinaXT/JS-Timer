class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }



start = () => {
  this.tick();
  const timer = setInterval(this.tick, 1000);
  clearInterval(timer);
};

pause = () => {
  clearInterval();
};

  tick = () => {
    console.log('tick');
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
