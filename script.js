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

  function loadDescriptions() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var description = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(description);
    });
  }
    function displayCurrentDate() {
        var currentDate = dayjs().format("dddd, MMMM D, YYYY");
        $("#currentDay").text(currentDate);
      }

  function generateTimeBlocks() {
    var container = $(".container-lg");
    for (var hour = 0; hour < 24; hour++) {
      var timeBlock = $('<div class="row time-block"></div>');
      var hourText = $('<div class="col-2 col-md-1 hour text-center py-3"></div>');
      var description = $('<textarea class="col-8 col-md-10 description" rows="3"></textarea>');
      var saveButton = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>');

      hourText.text(formatHour(hour));
      description.attr("id", "hour-" + hour);
      saveButton.attr("id", "saveBtn-" + hour);

      timeBlock.append(hourText, description, saveButton);
      container.append(timeBlock);
    }
  }


  });