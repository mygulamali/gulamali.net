require('../stylesheets/all.scss');

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(function () {
  if (document.body.classList.contains('publications')) {
    require('./publications');
  }
});
