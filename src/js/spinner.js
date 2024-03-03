import { Spinner } from 'spin.js';

const spinerContainer = document.querySelector('.js-backdrop');

let opts = {
  lines: 14,
  length: 22,
  width: 16,
  radius: 47,
  scale: 0.6,
  corners: 1,
  speed: 1,
  rotate: 0,
  animation: 'spinner-line-fade-quick',
  direction: 1,
  color: '#3385ff',
  fadeColor: 'transparent',
  top: '50%',
  left: '50%',
  shadow: '0 0 1px transparent',
  zIndex: 2000000000,
  className: 'spinner',
  position: 'absolute',
};

const spinner = new Spinner(opts);

export const spinnerPlay = () => {
  spinerContainer.classList.remove('is-hidden');
  spinner.spin(spinerContainer);
};

export const spinnerStop = () => {
  spinerContainer.classList.add('is-hidden');
  spinner.stop();
};