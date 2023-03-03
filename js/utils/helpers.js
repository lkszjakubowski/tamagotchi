const decreaseInterval = (decreaseFn, interval) => {
  return setInterval(() => {
    decreaseFn();
  }, interval);
};

const decreaseStat = (stat, decreaseValue = 1) => {
  stat.value = Math.max(0, stat.value - decreaseValue);
};

const displayStat = (stat, elementSelector) => {
  const displayElement = document.querySelector(elementSelector);
  displayElement.innerText = stat.value;
};

export { decreaseInterval, displayStat, decreaseStat };
