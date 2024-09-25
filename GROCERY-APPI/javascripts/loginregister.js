 // Simple hash function for password 
 function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash.toString();
}

// Log in a user
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const hashedPassword = hashPassword(password);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === hashedPassword);
    if (user) {
        alert('Login successful!');
        window.location.href = 'daziboard.html';
    } else {
        alert('Invalid username or password.');
    }
}

 // function redirect to registration page
 function redirectToRegistration() {
    window.location.href = 'register.html'; 
}

 // Register a new user
 function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const hashedPassword = hashPassword(password);
        users.push({ username, password: hashedPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        window.location.href = 'login.html';
    } else {
        alert('Please enter both username and password.');
    }
}

// Redirect to login page
function redirectToLogin() {
    window.location.href = 'login.html';
}

