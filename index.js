const RATIO_START = 1,
  RATIO_MIDDLE = 0.5,
  RATIO_END = 0;

const observer = new IntersectionObserver(callback, {
  threshold: [RATIO_END, RATIO_MIDDLE, RATIO_START]
});

observer.observe(document.getElementById('full-height-div'));

/**
 * @param {IntersectionObserverEntry[]} entries
 */
function callback(entries) {
  const ratio = entries[0].intersectionRatio;

  console.log('Ratio is: ', ratio);

  if (ratio === 1) {
    console.log('%cWorking', 'color: green;');
  } else {
    console.error(`Expect ratio to be 1 but got ${ratio}`);
  }
}
