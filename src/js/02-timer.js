import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  styleForField: document.querySelectorAll('.field'),
  buttonStart: document.querySelector('button'),
  input: document.querySelector('input#datetime-picker'),
};


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
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.input, options);

options.onClose = function(selectedDates, dateStr, instance){
      
  }