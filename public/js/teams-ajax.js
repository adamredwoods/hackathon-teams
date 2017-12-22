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

   $(".update-item-button").click(function(e) {
      e.preventDefault();
      //var dt = $(this).serialize();
      var dt = {"name": $("#teamName").val(),
         "members": $("#teamMembers").val()
      };

      $.ajax({
         url: $(this).attr("href"),
         method: "PUT",
         data: dt

      }).success(function(data) {
         window.location.href="/teams";
      });
   });

});
//data: {"newName": $("#teamName").val(),
//   "newMembers": $("#teamMembers").val()}
