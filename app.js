import {app , auth ,createUserWithEmailAndPassword} from "./config.js"


window.signUPHandler = () =>  {
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    console.log(email.value);
    console.log(password.value);


    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(userCredential);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
    });
    
}

const registerBtn = document.querySelector('#registerBtn')

registerBtn.addEventListener("click", signUPHandler)