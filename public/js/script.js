// Handle Signup Form
// document.getElementById('signupForm')?.addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const data = {
//         username: document.getElementById('username').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value
//     };

//     const response = await fetch('/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     });

//     const result = await response.text();
//     alert(result);
// });

document.getElementById('signupForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Collecting input values
    const username = document.getElementById('usernamee').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check for empty fields (Basic Validation)
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare data to send
    const data = { username, email, password };

    try {
        // Sending the signup request
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Handling response based on status
        if (response.ok) {
            const result = await response.text();
            alert(result);
            window.location.href = '/login'; // Redirect to login page on success
        } else {
            const errorMsg = await response.text();
            alert('Error: ' + errorMsg);
        }
    } catch (error) {
        console.error('Signup Error:', error);
        alert('An error occurred during signup. Please try again.');
    }
});


// Handle Login Form
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.text();
    if (result === "Login successful!") {
        window.location.href = "/home";
    } else {
        alert(result);
    }
});
