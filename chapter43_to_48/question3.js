function deleteRow(index) {
    var rows = document.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        var rowIndex = rows[i].childNodes[0];
        console.log(rowIndex);
        console.log(index);
        break;

        if (rowIndex === index) {
            console.log("rowIndex = ", rowIndex);
            console.log("index = ", index);
        }
    }
}