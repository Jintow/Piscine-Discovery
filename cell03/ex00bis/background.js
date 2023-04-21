

function change_color()
{
    var nb = Math.floor(Math.random() * 256 * 256 *256);
    var hexNb = nb.toString(16);
    var color = "#" + ("000000" + hexNb).slice(-6);
    apply_change(color);
}

function apply_change(res)
{
    $("body").css("background-color", res);
}