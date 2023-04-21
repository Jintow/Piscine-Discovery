function change_baloon() {
    var balloon = $(".baloon");
    var size = balloon.height();
    size = size + 10;
    if (size > 420)
        size = 100;
    balloon.css("height", size + "px");
    balloon.css("width", size + "px");
    if (!balloon.css("background-color"))
        balloon.css("background-color", "red");

    console.log(balloon.css("background-color"));
    if (balloon.css("background-color") == "rgb(255, 0, 0)")
        balloon.css("background-color", "green");
    else if (balloon.css("background-color") == "rgb(0, 128, 0)")
        balloon.css("background-color", "blue");
    else if (balloon.css("background-color") == "rgb(0, 0, 255)")
        balloon.css("background-color", "red");
}