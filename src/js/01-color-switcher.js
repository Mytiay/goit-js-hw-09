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


function startBgChange() {
    onChangeBgk();
    refs.stop.disabled = false;
    refs.stop.disabled = true;
    setInterval(() => {
    onChangeBgk();
    }, 1000);
    
};

function stopBgChange() {
    clearInterval(1);
};

function onChangeBgk() {
refs.body.style.backgroundColor = getRandomHexColor();
}