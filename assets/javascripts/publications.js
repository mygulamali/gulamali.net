function toggleAbstract(event) {
  const button = event.currentTarget;
  const buttonClass = button.querySelector('i').classList;
  const abstractStyle = button.nextElementSibling.style;

  buttonClass.toggle('icon-chevron-down');
  buttonClass.toggle('icon-chevron-up');

  if (abstractStyle.display === 'block') {
    abstractStyle.display = 'none';
  } else {
    abstractStyle.display = 'block';
  }
};

const buttons = document.querySelectorAll('button');

Array.prototype.forEach.call(buttons, function (button, index) {
  button.addEventListener('click', toggleAbstract);
});
