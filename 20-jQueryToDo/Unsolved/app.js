/**
 * jQuery TODO
 **/

/*
 *  Use the provided starter HTML to make a list app.
 *  This app will take text from an input box
 *  and display it in another box elsewhere on the page.
 *  Add a way to click and delete the entries you add, too.
 *
 *
 *  Bonus:
 *  ======
 *  Add a new entry when you press the `return` key.
 *  Style it!
 *
 */
console.log("app");

// $(

  $("#add").on("click", function() {
    const toDo = $("#new-task").val();
    const doneBtn = $("<button>").addClass("done");
    $(doneBtn).val(toDo);
    $(doneBtn).text("finished");
    console.log(toDo);
    $("#tasks").append(`<li class='list-item' value='${toDo}'>`);
    $(".list-item:last-child").text(toDo);
    $("#done-button-holder").append(doneBtn);
    $("#new-task").val("");
  });

  $(document).on("click", ".done", function() {
    console.log("clicked");
    console.log(this.value);
    $("#completed").append("<li class='completed-item'>");
    $(".completed-item:last-child").text(this.value);
    $(".list-item").val(this.value).remove();
    $(this).remove();
  });


// );
