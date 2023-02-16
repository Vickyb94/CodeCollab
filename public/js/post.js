
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
.querySelector('#postBtn')
.addEventListener('click', postButton);