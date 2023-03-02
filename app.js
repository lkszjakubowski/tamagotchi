import Game from './js/game.js';
import { startAnimation } from './js/utils/animation.js';

const elementsObj = {
  healthElement: '.stat-text.health',
  hungerElement: '.stat-text.hunger',
  energyElement: '.stat-text.energy',
  funElement: '.stat-text.fun',
};

document.addEventListener('DOMContentLoaded', () => {
  startAnimation();
  const game = new Game();
  game.start(elementsObj);
});
