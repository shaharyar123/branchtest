
function taskadd(){
    var field1 = document.getElementById('name');
    var firstname=field1.value;


    var field2 = document.getElementById('f_name');
    var fathername=field2.value;

    var field3 = document.getElementById('age');
    var age=field3.value;



    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);

    var itemText = document.createTextNode(firstname);
    var itemText2 = document.createTextNode(fathername);
    var itemText3 = document.createTextNode(age);

    listItem.appendChild(itemText);
    listItem.appendChild(itemText2);
    listItem.appendChild(itemText3);
    document.getElementById('place').appendChild(listItem);

    field1.value="";
    field2.value="";
    field3.value="";



    var btn = document.createElement("button");
    btn.onclick = edit;
    btn.innerText = 'Edit';
    listItem.appendChild(btn);


}


function edit() {


    var field1 = document.getElementById('name');
    var field2 = document.getElementById('f_name');
    var field3 = document.getElementById('age');
    var place = this.parentElement;
    place.setAttribute("id", "edit");



       field1.value = place.childNodes[1].textContent;
       field2.value = place.childNodes[2].textContent;
       field3.value = place.childNodes[3].textContent;



   document.getElementById('addbutton').style.display="none";
    document.getElementById('deletebutton').style.display="none";
    document.getElementById('updatebutton').style.display="inline";
    document.getElementById('clear').style.display="none";



}


function update(){




    document.getElementById('addbutton').style.display="inline";
    document.getElementById('deletebutton').style.display="inline";
    document.getElementById('updatebutton').style.display="none";
    document.getElementById('clear').style.display="inline";

    var editPlace = document.getElementById('edit');

    var field1 = document.getElementById('name');
    editPlace.childNodes[1].textContent = field1.value;

    var field2 = document.getElementById('f_name');
    editPlace.childNodes[2].textContent = field2.value;

    var field3 = document.getElementById('age');
    editPlace.childNodes[3].textContent = field3.value;

    document.getElementById('edit').removeAttribute('id','');



    field1.value="";
    field2.value="";
    field3.value="";


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

function allclear(){
    var clear= document.getElementById('place').textContent=" ";
    /*console.log(place.textContent=" ");*/
    clear= null;
}