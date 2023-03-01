import Tamagotchi from './modules/tamagotchi.js';

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
  }

  start = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.tamagotchi.mount({
      healthElement,
      hungerElement,
      energyElement,
      funElement,
    });
  };

  decreaseStats = ({
    healthElement,
    hungerElement,
    energyElement,
    funElement,
  }) => {
    const interval = setInterval(() => {
      const newFunValue = this.tamagotchi.fun.value - 1;
      const newHungerValue = this.tamagotchi.hunger.value - 1;

      if (newFunValue === 0 || newHungerValue === 0) {
        clearInterval(interval);
      }

      this.tamagotchi.fun = { ...this.tamagotchi.fun, value: newFunValue };
      this.tamagotchi.hunger = {
        ...this.tamagotchi.hunger,
        value: newHungerValue,
      };

      this.tamagotchi.displayFun(funElement);
      this.tamagotchi.displayHunger(hungerElement);
    }, 1000);

    const interval2 = setInterval(() => {
      const newEnergyValue =
        this.tamagotchi.fun.value === 0
          ? this.tamagotchi.energy.value - 2
          : this.tamagotchi.energy.value - 1;

      if (newEnergyValue === 0) {
        clearInterval(interval2);
      }

      this.tamagotchi.energy = {
        ...this.tamagotchi.energy,
        value: newEnergyValue,
      };

      this.tamagotchi.displayEnergy(energyElement);
    }, 2000);

    const interval3 = setInterval(() => {
      if (
        this.tamagotchi.hunger.value <= 0 ||
        this.tamagotchi.energy.value <= 0
      ) {
        const newHealthValue = this.tamagotchi.health.value - 1;

        if (newHealthValue === 0) {
          clearInterval(interval3);
        }

        this.tamagotchi.health = {
          ...this.tamagotchi.health,
          value: newHealthValue,
        };

        this.tamagotchi.displayHealth(healthElement);
      }
    }, 1000);
  };
}
