$(function () {
    $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).closest(".time-block").attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, description);
    });
  
  function applyTimeBlockClasses() {
    var currentHour = dayjs().format("H");
    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
      $(this).removeClass("past present future");
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  });