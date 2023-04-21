function change_baloon()
{
    var balloon = document.getElementsByClassName("baloon");
    var size = balloon[0].getBoundingClientRect().height;
    size = size + 10;
    if (size > 420)
        size = 100;
    balloon[0].style.height = size + "px";
    balloon[0].style.width = size + "px";
    if (!balloon[0].style.getPropertyValue('background-color'))
        document.getElementsByClassName("baloon")[0].style.backgroundColor = "red"

    console.log(balloon[0].style.getPropertyValue('background-color'));
    if (balloon[0].style.getPropertyValue('background-color') == "red")
        balloon[0].style.backgroundColor = "green";
    else if (balloon[0].style.getPropertyValue('background-color') == "green")
        balloon[0].style.backgroundColor = "blue";
    else if (balloon[0].style.getPropertyValue('background-color') == "blue")
        balloon[0].style.backgroundColor = "red";
}