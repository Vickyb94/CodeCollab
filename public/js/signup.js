const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        // after signup display dashboard again
        if (response.ok) {
            alert(`Welcome ${username}!`);
            document.location.replace('/');
        } else {
            alert('Sign up Failed! Please try again');
            document.location.replace('/signup');
        }
    }
};

document
.querySelector('#signup-btn')
.addEventListener('click', signupFormHandler);




