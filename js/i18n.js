$(document).ready(function(){
  i18n.init({ debug: true }, function() {
    // save to use translation function as resources are fetched
    $('body').i18n();
  });
});
