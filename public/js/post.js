
const postButton = () => {
  const form = document.querySelector('#postForm');
  
  if (form.style.display === 'none') {
    form.style.display = 'block'
  } else {
    form.style.display = 'none'
  }
};

document
.querySelector('#postBtn')
.addEventListener('click', postButton);

// module.exports = postButton;