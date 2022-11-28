import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from "notiflix";

const refs = {
  styleForField: document.querySelectorAll('.field'),
  buttonStart: document.querySelector('button'),
  input: document.querySelector('input#datetime-picker'),
  outputDays: document.querySelector('[data-days]'),
  outputHours: document.querySelector('[data-hours]'),
  outputMinutes: document.querySelector('[data-minutes]'),
  outputSeconds: document.querySelector('[data-seconds]'),
};

refs.buttonStart.disabled = true;

document.querySelector('.timer').style.display = 'flex';

refs.styleForField.forEach((e) => {(e.style.display = 'flex'),
  (e.style.flexDirection = 'column'),
  (e.style.alignItems = 'center'),
  (e.style.fontFamily = 'BlinkMacSystemFont'),
  (e.style.marginTop = '5px'),
  (e.style.fontSize = '18px'),
  (e.style.paddingLeft = '5px');;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userDate = selectedDates[0];

    if (userDate < Date.now()) {
      refs.buttonStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.buttonStart.disabled = false;
      Notiflix.Notify.success('Push "Start"');
    }
  },
};

flatpickr(refs.input, options);

const counter = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const deltaTime =
        new Date(refs.input.value).getTime() - Date.now();

      if (deltaTime <= 1000) {
        clearInterval(this.intervalId);
        Notiflix.Report.success(
          'Done!!!',
          function reloadPage() {
            window.location.reload();
          }
        );
      }
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateTimeInterface({ days, hours, minutes, seconds });

      refs.buttonStart.setAttribute('disabled', true);
    }, 1000);
  },
};

refs.buttonStart.addEventListener('click', () => {
  counter.start(), (refs.input.disabled = true);
});

  
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
};

function updateTimeInterface({ days, hours, minutes, seconds }) {
  refs.outputSeconds.textContent = `${seconds}`;
  refs.outputMinutes.textContent = `${minutes}`;
  refs.outputHours.textContent = `${hours}`;
  refs.outputDays.textContent = `${days}`;;
}

function pad(value) {
  return String(value).padStart(2, '0');
}