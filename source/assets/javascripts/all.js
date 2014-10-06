//= require jquery
//= require_tree .

$(document).ready(function () {
  if ($('body').height() < $(window).height()) {
    $('footer').css('position', 'absolute').css('bottom', '0');
  }
});
