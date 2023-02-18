
// middleware function to check the loggedIn status of a user
const loggedIn = (req, res, next) => {
  console.log(`loggedIn middleware loggedIn status: ${req.session.loggedIn}`);
  
  // if status is true, next
  if (req.session.loggedIn) {next()}
  // if status is false, redirect user to login handlebar
  else {
    console.log("You are not logged in!");
    res.render('/login', {});
  }
}

module.exports = loggedIn;