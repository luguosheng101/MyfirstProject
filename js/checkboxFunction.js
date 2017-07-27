function checkAll() {
    for (var i = 0; i < document.getElementById("cblStatuteEnumTypeId").getElementsByTagName("input").length; i++) {
        document.getElementById("cblStatuteEnumTypeId_" + i).checked = true;
    }
}
function deleteAll() {

    for (var i = 0; i < document.getElementById("cblStatuteEnumTypeId").getElementsByTagName("input").length; i++) {

        document.getElementById("cblStatuteEnumTypeId_" + i).checked = false;
    }
}
function ReverseAll() {

    for (var i = 0; i < document.getElementById("CheckBoxList1").getElementsByTagName("input").length; i++) {
        var objCheck = document.getElementById("CheckBoxList1_" + i);

        if (objCheck.checked)

            objCheck.checked = false;
        else
            objCheck.checked = true;
    }
}