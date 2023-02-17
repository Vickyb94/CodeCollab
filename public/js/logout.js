const logout = async () => {
    const response = await fetch ('api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
//change path if log out was succesful
    if (response.ok) {
        document.location.replace('/dashboard');   
    } 
    //alert user if log out failed
    else {
        alert ('Error! Please try logging out again.');
    }
};
//add event listener 
document.querySelector('#log-out').addEventListener('click', logout);