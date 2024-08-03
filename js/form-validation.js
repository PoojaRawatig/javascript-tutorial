function validateForm(event){
    event.preventDefault();
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let number = document.getElementById('number');
    let dob = document.getElementById('dob');
    let query = document.getElementById('query');
    let message = document.getElementById('message');
    let error = document.getElementById('errorMessage');

    //required validation
    if(username.value == ''){
        error.innerHTML = 'username is required*';
        error.style.display = 'block';
        return;
    }

    if(email.value == ''){
        error.innerHTML = 'email is required*';
        error.style.display = 'block';
        return;
    }

    if(password.value == ''){
        error.innerHTML = 'password is required*';
        error.style.display = 'block';
        return;
    }

    if(number.value == ''){
        error.innerHTML = 'number is required*';
        error.style.display = 'block';
        return;
    }

    if(dob.value == ''){
        error.innerHTML = 'dob is required*';
        error.style.display = 'block';
        return;
    }

    //length validation
    if(username.value.length < 3){
        error.innerHTML = 'username should atleast be of 3 characters*';
        error.style.display = 'block';
        return;
    }

    //valid email 
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!validEmailRegex.test(email.value)){
        error.innerHTML = 'enter a valid email address*';
        error.style.display = 'block';
        return;
    }

    //validate phone number
    let validNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!validNumberRegex.test(number.value)){
        error.innerHTML = 'enter a valid phone number*';
        error.style.display = 'block';
        return;
    }
    alert('Form Submitted');
}