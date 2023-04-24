export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getImageNames = () => {
  const context = require.context("./assets", false, /\.(jpe?g|png|gif)$/);
  const imageNames = context
    .keys()
    .map((fileName) => fileName.replace("./", ""));
  return imageNames;
};

export const formatImageName = (imageName) => {
  // Remove file extension
  const nameWithoutExtension = imageName.replace(/\.[^/.]+$/, "");

  // Replace dashes with spaces and capitalize first letter of each word
  const formattedName = nameWithoutExtension
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
};
