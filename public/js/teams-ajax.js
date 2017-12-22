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

   $(".update-form").click(function(e) {
      e.preventDefault();
      var dt = $(this).serialize();
      
      $.ajax({
         url: $(this).attr("href"),
         method: "PUT",
         data: "123123"

      });
   });

});
