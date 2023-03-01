let animationInterval;
const spriteSheet = document.querySelector('.console--screen-main-image');
const spriteSheetHeight = 260;
const spriteFrameHeight = 130;

const startAnimation = () => {
  let position = spriteFrameHeight;
  const diff = spriteFrameHeight;

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `0px -${position}px`;

    if (position < spriteSheetHeight) {
      position = position + diff;
    } else {
      position = spriteFrameHeight;
    }
  }, 1000);
};

export { startAnimation };
