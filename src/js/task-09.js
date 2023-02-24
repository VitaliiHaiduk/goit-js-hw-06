function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const magicButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');



const onMagicButtonClick = () => {
 document.body.style.backgroundColor = getRandomHexColor();
 colorValue.textContent = getRandomHexColor();
}


magicButton.addEventListener('click', onMagicButtonClick)