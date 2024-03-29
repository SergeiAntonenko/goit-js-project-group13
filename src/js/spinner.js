import { Spinner } from 'spin.js';

let opts = {
  lines: 14,
  length: 12,
  width: 8,
  radius: 16,
  scale: 0.6,
  corners: 1,
  speed: 1,
  rotate: 0,
  animation: 'spinner-line-fade-quick',
  direction: 1,
  color: '#4F2EE8',
  fadeColor: 'transparent',
  top: '50%',
  left: '50%',
  shadow: '0 0 1px transparent',
  zIndex: 999,
  className: 'spinner',
  position: 'absolute',
};

const spinner = new Spinner(opts);

export const spinnerPlay = containerRef => {
  spinner.spin(containerRef);
};

export const spinnerStop = () => {
  spinner.stop();
};
