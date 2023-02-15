const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
console.log("Running code");
    if(username && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json'},
            });
            console.log(response);
            if (response.ok) {
               document.location.replace('/api/dashboard');
            }
                else {
                alert('Sign up Failed! Please try again');
            }
    }
};

document
  .querySelector('#user_submitbtn')
  .addEventListener('click', signupFormHandler);




