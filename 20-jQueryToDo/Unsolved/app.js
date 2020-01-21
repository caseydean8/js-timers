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

$(
  $("#add").on("click", function() {
    console.log("clicked");
    var toDo = $("#new-task").val();
    console.log(toDo);
    $("#tasks").val(toDo);
    $("#new-task").val("");
  })
);
