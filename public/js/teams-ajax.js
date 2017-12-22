$(document).ready(function() {

   $(".delete-item").click(function(e) {
      e.preventDefault();
      $.ajax({
         url: $(this).attr("href"),
         method: "DELETE"
      }).success(function(data) {
         window.location.href="/teams";
      });
   });

});
