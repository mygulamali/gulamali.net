require('../stylesheets/all.scss');

const $ = require('jquery');

$(document).ready(function () {
  if ($('body.publications_index')) {
    $('.abstract-toggle').on('click', function (e) {
      $(this).parent().find('.abstract-content').toggle();
      $(this).find('i').toggleClass('icon-chevron-up icon-chevron-down');
      var action = $(this).find('span');
      action.text() === 'Show' ? action.text('Hide') : action.text('Show');
    });
  }
});
