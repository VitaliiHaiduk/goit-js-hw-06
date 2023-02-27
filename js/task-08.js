const registrationForm = document.querySelector(".login-form");



const userData = (event) => {
    event.preventDefault();
    const  { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
       return alert('Try again');
    } else {
        const userDataObject = {
            email: email.value,
            password: password.value,
        };
        console.log(userDataObject);
    }

    event.currentTarget.reset();
}



registrationForm.addEventListener('submit', userData);