$(document).ready(function() {
    var pingPong = parseInt(prompt("Enter the number you want to ping pong!"));

    for (var index = 1; index <= pingPong; index += 1) {
      if (index % 3 === 0 && index % 5 === 0) {
        $("#pingpong").append("<li>" + "ping-pong" + "</li>");
      }
      else if (index % 3 === 0) {
        $("#pingpong").append("<li>" + "ping" + "</li>");
      }
      else if (index % 5 === 0) {
        $("#pingpong").append("<li>" + "pong" + "</li>");
      }
      else {
        $("#pingpong").append("<li>" + index + "</li>");
      }

  }
});
