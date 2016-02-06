

function taskadd(){
    var task = document.getElementById('textinput').value;
    var task2 = document.getElementById('textinput2').value;
    var task3 = document.getElementById('textinput3').value;
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(task);
    var itemText2 = document.createTextNode(task2);
    var itemText3 = document.createTextNode(task3);
    listItem.appendChild(itemText);
    listItem.appendChild(itemText2);
    listItem.appendChild(itemText3);
    document.getElementById('place').appendChild(listItem);

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("EDIT");
    btn.appendChild(t);
    listItem.appendChild(btn);;

}

function deleteCheckBox() {
    var ul = document.getElementById('place');
    var li = ul.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}





