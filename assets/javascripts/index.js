require('../stylesheets/all.scss');

const $ = require('jquery');

// make footer sticky if window is too tall for content
function stickFooterAtBottom() {
  var $footer = $('footer');

  if ($('body').height() < $(window).height()) {
    $footer.css('position', 'absolute').css('bottom', '0');
  } else {
    $footer.css('position', 'relative').css('bottom', '');
  }
}

$(document).ready(function () {
  stickFooterAtBottom();
  $(window).on('resize', stickFooterAtBottom);

  // enable publication abstracts to be toggled on large screens
  if ($('body.publications_index')) {
    $('.abstract-toggle').on('click', function (e) {
      $(this).parent().find('.abstract-content').toggle();
      $(this).find('i').toggleClass('icon-chevron-up icon-chevron-down');
      var action = $(this).find('span');
      action.text() === 'Show' ? action.text('Hide') : action.text('Show');
    });
  }
});
