  
$(document).ready(function () {

  var $q = $('input[name="q"]');
  var $form = $('form');

  $form.submit(function (event) {
    var shouldSubmit = confirm('Leave Page?');
    if (!shouldSubmit) {
      event.preventDefault();
    }
  });
  
  $('#clear').click(function () {
    $q.val('');
  });

  $('#lucky').click(function () {
    $q.val('kittens');
    $form.submit();
  });

});
