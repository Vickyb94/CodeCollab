
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

const submitPost = async (event) => {
  event.preventDefault();
 

  const content = document.querySelector('#content').value.trim();
  const imageLink = document.querySelector('#picture').value.trim();
  
  if(content) {
    const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ content, imageLink}),
        headers: { 'Content-Type': 'application/json'},
      });
  }
};

document
.querySelector('#submit-btn')
.addEventListener('click', submitPost);