// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    

    
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let isValid = true;

    
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }

    
    if (isValid) {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Registration successful!'); 
        document.getElementById('registrationForm').reset();
    }
});

