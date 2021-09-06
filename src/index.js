const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    bodyEl: document.querySelector('body'),
    startButton: document.querySelector("[data-action='start']"),
    stopButton: document.querySelector("[data-action='stop']"),
}
console.log(refs.bodyEl);
console.log(refs.startButton);
console.log(refs.stopButton);

let idd;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
const colorChange = e =>{
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
    const qwe = () =>{
        refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }

    idd = window.setInterval(qwe, 1000);
    console.log('Start');
}
const stopColorChange = () =>{
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
    clearInterval(idd);
    console.log('Stop');
}
refs.startButton.addEventListener('click', colorChange);
refs.stopButton.addEventListener('click', stopColorChange);