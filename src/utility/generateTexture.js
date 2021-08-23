export const generateTexture = (text) => {
  // Set variables
  const bitmapShift = 10;
  const copyAmount = 2;
  const canvasSize = 105; //size of each picture which will then be repeated
  const fontSize = canvasSize / copyAmount;
  const fontStyle = `Bold ${fontSize}px Arial`;

  // Create canvas
  const bitmap = document.createElement("canvas");
  bitmap.height = bitmap.width = canvasSize;

  // Create 2d context
  const g = bitmap.getContext("2d");

  // Add font style again
  g.fillStyle = "rgb(0,0,0,0.06)";
  g.font = fontStyle;

  // Add text on the canvas
  const textWidth = g.measureText(text).width;
  g.scale(canvasSize / textWidth, 1);
  const fillAndDuplicateText = (index) =>
    g.fillText(text, 0, fontSize * ++index - bitmapShift);

  Array(copyAmount + 1)
    .fill(0)
    .forEach((item, i) => {
      fillAndDuplicateText(i);
    });

  const background = bitmap.toDataURL("image/png");
  return background;
};
