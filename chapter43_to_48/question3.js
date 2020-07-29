function deleteRow(deleteBtn) {
    let rowIndex = deleteBtn.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(rowIndex);
}