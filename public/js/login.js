const loginFormHandler = async function(event) {
    event.preventDefault();

    // collect username input and password input from login form
     const username = document.querySelector("#username-input").value.trim();
     const password = document.querySelector("#password-input").value.trim();

    if (username && password) {
        const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password}),
        headers: { 'Content-Type': 'application/json'},
        });
        //redirect browser to dashboard
        if (response.ok) {
          document.location.replace('/dashboard');
        }
          else {
          alert('Login Failed! Please try again');
        }
    }

};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
