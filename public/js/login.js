
const loginFormHandler = async function(event) {
    event.preventDefault();

    // collect username input and password input from login form
    const username = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    
    if (username && password) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password}),
        headers: { 'Content-Type': 'application/json'},
      });
      
      //redirect browser to dashboard
      if (response.ok) {
        document.location.replace('/');
        alert("Welcome back!");
      } else {
        alert('Login Failed! Please try again');
      }
    }
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);
