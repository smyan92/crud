var selectedRow = null;

function onFormSubmit()
{
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
    formData["name"] = document.getElementById("name").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["message"] = document.getElementById("message").value;
    return formData;
}











function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameErr").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameErr").classList.contains("hide"))
            document.getElementById("nameErr").classList.add("hide");
    }
    return isValid;
}



function insertNewRecord(data) {
    var table = document.getElementById("customer").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.message;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="btn btn-primary edit" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-primary delete" onClick="onDelete(this)">Delete</a>`;
}







function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.phone;
    selectedRow.cells[2].innerHTML = formData.mail;
    selectedRow.cells[3].innerHTML = formData.message;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("message").value = selectedRow.cells[3].innerHTML;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("customer").deleteRow(row.rowIndex);
        resetForm();
    }
}




function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
    selectedRow = null;
}










