function increase() {
    let countHeading = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = ++countHeading;
}

function decrease() {
    let countHeading = document.getElementById("count").innerHTML;
    if (countHeading > 0) {
        document.getElementById("count").innerHTML = --countHeading;
    }
    else {
        document.getElementById("count").innerHTML = 0;
    }
}