export const capFirstLetter = (name) => {
  return name
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("");
};
