export default function(timings) {
  const transitions = {
    easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  };

  function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || transitions.easeOutFunction;
    return create(duration, property, delay, easeFunction);
  }

  function create(duration, property, delay, easeFunction) {
    duration = duration || timings.timeBase;
    property = property || 'all';
    delay = delay || 0;
    easeFunction = easeFunction || 'linear';

    return (
      property + ' ' + duration + 'ms ' + easeFunction + ' ' + delay + 'ms'
    );
  }

  transitions.easeOut = easeOut;
  transitions.create = create;

  transitions.hover = '0.2s ease-out';
  transitions.titleHover = '0.4s ease-out';
  transitions.popup = '0.3s ease-out';
  transitions.button = '0.3s ease-out';
  transitions.layoutButton = '0.1s ease-out';
  transitions.sample = '0.2s ease-out';
  transitions.select = '0.3s ease-out';
  transitions.settingsButton = '0.3s ease-out';
  transitions.tile = '0.4s ease-out';

  return transitions;
}