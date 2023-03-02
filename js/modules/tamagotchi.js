import {
  decreaseInterval,
  displayStat,
  decreaseStat,
} from '../utils/helpers.js';

export default class Tamagotchi {
  constructor() {
    this.fun = { value: 10, importance: 4 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.health = { value: 10, importance: 1 };

    this.funDecreaseInterval = decreaseInterval(this.decreaseFun, 1000);
    this.hungerDecreaseInterval = decreaseInterval(this.decreaseHunger, 1000);
    this.energyDecreaseInterval = decreaseInterval(this.decreaseEnergy, 2000);
    this.healthDecreaseInterval = null;

    console.log('Tamagotchi initialized');
  }

  decreaseFun = () => {
    decreaseStat(this.fun);
    displayStat(this.fun, '.stat-text.fun');

    if (this.fun.value <= 0) {
      clearInterval(this.funDecreaseInterval);
    }
  };

  decreaseHunger = () => {
    decreaseStat(this.hunger);
    displayStat(this.hunger, '.stat-text.hunger');

    if (this.hunger.value <= 0) {
      clearInterval(this.hungerDecreaseInterval);
    }
  };

  decreaseEnergy = () => {
    const decreaseValue = this.fun.value <= 0 ? 2 : 1;
    decreaseStat(this.energy, decreaseValue);
    displayStat(this.energy, '.stat-text.energy');

    if (this.energy.value <= 0) {
      clearInterval(this.energyDecreaseInterval);
    }

    if (this.energy.value <= 0 || this.hunger.value <= 0) {
      this.healthDecreaseInterval = decreaseInterval(this.decreaseHealth, 1000);
    }
  };

  decreaseHealth = () => {
    decreaseStat(this.health);
    displayStat(this.health, '.stat-text.health');

    if (this.health.value <= 0) {
      clearInterval(this.healthDecreaseInterval);
    }
  };

  mount = ({ healthElement, hungerElement, energyElement, funElement }) => {
    displayStat(this.health, healthElement);
    displayStat(this.hunger, hungerElement);
    displayStat(this.energy, energyElement);
    displayStat(this.fun, funElement);
  };
}
