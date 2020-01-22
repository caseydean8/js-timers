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
$("#tasks").append("<ul id='task-list'>")

// $(

  $("#add").on("click", function() {
    // console.log("clicked");
    var toDo = $("#new-task").val();
    console.log(toDo);
    // $("#tasks").text(toDo);
    $("#task-list").append("<li class='list-item'>");
    $(".list-item:last-child").text(toDo);
    $("#new-task").val("");
  });

  $(document).on("click", ".list-item", function() {
    console.log("clicked");
    console.log(this.innerText);
    $("#completed").append("<li class='completed-item'>");
    $(".completed-item").text(this.innerText);
    $(this).remove();
  });

  
// );
