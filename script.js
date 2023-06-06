$(function () {
    $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).closest(".time-block").attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, description);
    });
  
   
  });