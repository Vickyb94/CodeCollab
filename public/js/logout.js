const logout = async () => {
    const response = await fetch ('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
//change path if log out was succesful
    if (response.ok) {
        document.location.replace('/');    
    } 
    //alert user if log out failed
    else {
        alert ('Error! Please try logging out again.');
    }
};
//add event listener 
document.querySelector('#logout').addEventListener('click', logout);