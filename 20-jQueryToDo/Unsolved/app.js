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

// $(
  let deleteMark = 0;  

  const enterTodo= () => {
    const toDo = $("#new-task").val();
    const doneBtn = $("<button>").addClass("done");
    $(doneBtn).attr('id', toDo).text("finished");
    $("#tasks").append(`<li class='list-item' id='${toDo}'>`);
    $(".list-item:last-child").text(toDo);
    $("#done-button-holder").append(doneBtn);
    $("#new-task").val("");
  }

  $("#add").on("click", enterTodo);

  const enterIt = document.getElementById("new-task");
  enterIt.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      enterTodo();
    }
  })

  $(document).on("click", ".done", function() {
    $("#completed").append("<li class='completed-item'>");
    $(".completed-item:last-child").text(this.id);
    const deleteMe = document.getElementById(`${this.id}`);
    $(deleteMe).remove();
    $(this).remove();
  })