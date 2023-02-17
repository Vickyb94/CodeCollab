
// Cloudinary upload widget
var imageLink;
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dbzzfnp6n', 
  uploadPreset: 'codeCollab'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image url: ', result.info.url); 
      // set the value of imageLink to the cloudinary imageUrl to be stored on the database
      imageLink = result.info.url;
    }
  })
document
.getElementById("upload_widget")
.addEventListener("click", function(){
    myWidget.open();
  }, false);

// Toggle display for the post input form and submit button
const postButton = () => {
  const form = document.querySelector('#postForm');
  const postBtnDiv = document.querySelector('#postButtonDiv');

  if (form.style.display === 'none') {
    form.style.display = 'flex'
    postBtnDiv.display = 'none'
  } else {
    form.style.display = 'none'
    postBtnDiv.display = 'flex'
  }
};
document
.querySelector('#post-btn')
.addEventListener('click', postButton);

// Submit the users post
const submitPost = async (event) => {
  event.preventDefault();
 

  // grab the users text input
  const content = document.querySelector('#content').value.trim();

  // if the user at least entered required content (imageLink is not required), send post request
  if(content) {
    const response = await fetch('/api/dashboard', {
      method: 'POST',
      body: JSON.stringify({ content, imageLink }),
      headers: { 'Content-Type': 'application/json'},
    });
  }
};
document
.querySelector('#submit-btn')
.addEventListener('click', submitPost);