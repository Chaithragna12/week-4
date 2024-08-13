document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple form validation
    if (username && email && password) {
        // Save user details in local storage
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        document.getElementById('signupMessage').textContent = 'Signup successful!';
        document.getElementById('signupMessage').style.color = 'green';
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('signupMessage').textContent = 'Please fill out all fields.';
        document.getElementById('signupMessage').style.color = 'red';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        document.getElementById('loginForm').reset();

        // Redirect to another page
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

