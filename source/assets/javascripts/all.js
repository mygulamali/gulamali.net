//= require jquery

$(document).ready(function () {
  // make footer sticky if window is too tall for content
  if ($('body').height() < $(window).height()) {
    $('footer').css('position', 'absolute').css('bottom', '0');
  }

  // enable publication abstracts to be toggled on large screens
  if ($('body.publications_index')) {
    $('.abstract-toggle').on('click', function (e) {
      $(this).parent().find('.abstract-content').slideToggle('fast');
      $(this).find('i').toggleClass('icon-chevron-right icon-chevron-down');
      var action = $(this).find('span');
      action.text() === 'Show' ? action.text('Hide') : action.text('Show');
    });
  }
});
