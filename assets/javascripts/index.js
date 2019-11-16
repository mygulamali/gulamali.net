require('../stylesheets/all.scss');

const $ = require('jquery');

$(document).ready(function () {
  if ($('body.publications')) {
    function toggleAbstract(event) {
      const $button = $(event.currentTarget);
      $button.next('.abstract').toggle();
      $button.find('i').toggleClass('icon-chevron-up icon-chevron-down');
    }

    $('button').on('click', toggleAbstract);
  }
});
