const userInputForm = document.querySelector("#validation-input");



const inputBorder = (event) => {
    if (userInputForm.value.length === Number(userInputForm.dataset.length)) {
        userInputForm.classList.add('valid');
        userInputForm.classList.remove('invalid');
    } else {
        userInputForm.classList.add('invalid');
        userInputForm.classList.remove('valid');
    }
}


userInputForm.addEventListener('blur', inputBorder);

