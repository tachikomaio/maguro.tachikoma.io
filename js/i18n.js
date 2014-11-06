$(document).ready(function(){
  i18n.init({ debug: true }, function() {
    // save to use translation function as resources are fetched
    $("#header").i18n();
    $("headline").i18n();
  });
});
