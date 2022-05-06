const forms = document.querySelector('.forms');
const formInput = document.querySelectorAll('.form__input');
const headerButton = document.querySelector('.header__button');
const contentButton = document.querySelector('.content__button')

function resetInput() {
  formInput.forEach(item => item.value = '');
}

forms.addEventListener('submit', event => {
  event.preventDefault();
  resetInput()
})

function setScrollHeader() {
  window.scrollTo({
    top: 836,
    left: 0,
    behavior: "smooth"
  });
};

headerButton.addEventListener('click', setScrollHeader);

function setScrollContent() {
  window.scrollTo({
    top: 2291,
    left: 0,
    behavior: "smooth"
  });
};

contentButton.addEventListener('click', setScrollContent);