var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["task"] = document.getElementById("task").value;
    formData["project"] = document.getElementById("project").value;
    formData["status"] = document.getElementById("status").value;
    formData["duration"] = document.getElementById("duration").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.task;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.project;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.status;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.duration;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.date;
    alert('Are you sure to Add this record?')
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a class="button-main"onClick="onEdit(this)">Edit</a>
                       <a class="button-main" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("task").value = "";
    document.getElementById("project").value = "";
    document.getElementById("status").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    if (confirm('Are you sure to Edit this record ?')){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("task").value = selectedRow.cells[0].innerHTML;
    document.getElementById("project").value = selectedRow.cells[1].innerHTML;
    document.getElementById("status").value = selectedRow.cells[2].innerHTML;
    document.getElementById("duration").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;}
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.task;
    selectedRow.cells[1].innerHTML = formData.project;
    selectedRow.cells[2].innerHTML = formData.status;
    selectedRow.cells[3].innerHTML = formData.duration;
    selectedRow.cells[4].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("task").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}