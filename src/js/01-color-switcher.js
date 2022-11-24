const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop')
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.start.addEventListener('click', startBgChange);
refs.stop.addEventListener('click', stopBgChange);

let intervalId = 0;

function startBgChange() {
    onChangeBgk();
    refs.stop.disabled = false;
    refs.start.disabled = true;
    setInterval(() => {
    onChangeBgk();
    }, 1000);
    intervalId = intervalId + 1;
};

function stopBgChange() {
    refs.stop.disabled = true;
    refs.start.disabled = false
    clearInterval(intervalId);
};

function onChangeBgk() {
refs.body.style.backgroundColor = getRandomHexColor();
}