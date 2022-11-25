import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
const styleForField = document.querySelectorAll('.field');

document.querySelector('.timer').style.display = 'flex';

styleForField.forEach((e) => {(e.style.display = 'flex'),
  (e.style.flexDirection = 'column'),
  (e.style.alignItems = 'center'),
  (e.style.gap = '5px'),
  (e.style.marginTop = '5px');;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(document.querySelector('input#datetime-picker'), {options});