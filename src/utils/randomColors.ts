function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomBlueColor = () => {
  // generate random red, green and blue intensity
  const red = getRandomInt(30, 70);
  const green = getRandomInt(30, 70);
  const blue = getRandomInt(130, 170);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};

export const randomPinkColor = () => {
  // generate random red, green and blue intensity
  const red = getRandomInt(230, 255);
  const green = getRandomInt(50, 80);
  const blue = getRandomInt(110, 140);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};

export const randomAllColors = () => {
  const hex = Math.floor(Math.random() * 0xffffff);
  const color = `#${hex.toString(16)}`;

  return color;
};
