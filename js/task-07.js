const textSizeValue = document.querySelector("#font-size-control");
const changedTextSize = document.querySelector("#text");


changedTextSize.style.fontSize = textSizeValue.value + "px";

const selectedFontSize = () => {
    changedTextSize.style.fontSize = textSizeValue.value + "px";
}

textSizeValue.addEventListener('input', selectedFontSize);




