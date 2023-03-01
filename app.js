import Game from './js/game.js';
import { startAnimation } from './js/utils/animation.js';

document.addEventListener('DOMContentLoaded', () => {
  startAnimation();
  const game = new Game();

  // Start game
  game.start({ healthElement: '.health' });
});
