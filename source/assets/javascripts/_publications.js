$(document).ready(function () {
  $('.abstract-toggle').on('click', function (e) {
    $(this).parent().find('.abstract-content').slideToggle('fast');
    $(this).find('i').toggleClass('icon-chevron-right icon-chevron-down');
    var action = $(this).find('span');
    action.text() === 'Show' ? action.text('Hide') : action.text('Show');
  });
});
