const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output');



const inputValue = (event) => {
    nameOutput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        nameOutput.textContent = 'Anonimus';
    }
 
}

nameInput.addEventListener('input', inputValue);