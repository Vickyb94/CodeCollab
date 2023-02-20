
const logoutHandler = async (choice) => {

    if (choice) {
        const response = await fetch ('api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        // display dashboard again if logout was successfull
        if (response.ok) {
            alert("You logged out, come back soon!");
            document.location.replace('/');
        } 
        // alert user if logout failed
        else {
            alert('You are already logged out.');
            document.location.replace('/');
        }
    } else {
        // alert("no");
        document.location.replace('/');
    }
};

// document
//     .querySelector('#log-out')
//     .addEventListener('click', logoutHandler);

document
.querySelector('#logout-btn-yes')
.addEventListener('click', function() {
    logoutHandler(true);
});

document
.querySelector('#logout-btn-no')
.addEventListener('click', function() {
    logoutHandler(false);
});