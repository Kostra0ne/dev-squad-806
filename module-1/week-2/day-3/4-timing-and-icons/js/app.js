import { animateFaIcons, universalAnswer } from "./animated-icons.js"; // import a function from a separate file

const heartElement = document.getElementById("heart");
const batteryElement = document.getElementById("battery");
const emojiElement = document.getElementById("emoji");

animateFaIcons(heartElement, ["f004", "f7a9"]); // use the imported function
animateFaIcons(emojiElement, ["f5b8", "f582", "f585", "f59a", "f58b"], 200);
animateFaIcons(batteryElement, ["f244", "f243", "f242", "f241", "f240"]);
