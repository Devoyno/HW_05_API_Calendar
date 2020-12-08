$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val().trim();
    console.log(activity);

    var hour = $(this).parent().attr("id");

    console.log(hour);

    localStorage.setItem(hour, activity);
    console.log(localStorage);
  });

  function rowColorizer() {
    var thisTime = moment().hours();
    console.log(thisTime);

    $(".timeblock").each(function() {
      var ourTime = parseInt($(this).attr("id").split("-")[1]);

      console.log(ourTime);
      // make if, else if and else compare currentTime to ourTime
    });
  }

  rowColorizer();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
