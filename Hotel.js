//There should be a global variable here that stores the number of guests per room.
var room1total = 0;
var room2total = 0;
var room3total = 0;
var room4total = 0;
var room5total = 0;
var room6total = 0;


//Room 1
function checkIn() {
    if (room1total > 3) {  //IF the room1total is greater than 3
        alert("ROOM 1 IS FULL");
    }
    else {
        room1total++; //I will add +1 to the room1total global variable.
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi");
        var u = document.getElementById('user').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol1'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('user').value = " ";
        
    } 
}
function removeMe() {
    room1total--;  //I remove one from the room1total variable
    var personNum = document.getElementById("room1total").value;
    var x = parseInt(personNum);

    var getChild = document.getElementsByClassName('newLi')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room1total').value = " ";
    }

    var isVisible = true;
function vTest() {
    if (isVisible == true ) {
    document.getElementById('z').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('z').style.visibility = "visible";
    isVisible = true;
    }
}

function clear() {
    document.getElementById('ol1') = "";

}









//Room 2
function checkIn2() {
    if (room2total > 3) {
        alert("ROOM 2 IS FULL");
    }
    else {
        room2total++;                
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi2");
        var u = document.getElementById('userTwo').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol2'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userTwo').value = " ";
        
    } 
}

function removeMe2() {
    room2total--; //I will remove -1 to the room1total global variable.
    var personNum = document.getElementById("room2total").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByClassName('newLi2')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room2total').value = " ";
    }

function vTest2() {
    //var isVisible = true; 
    if (isVisible == true ) {
    document.getElementById('zTwo').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zTwo').style.visibility = "visible";
    isVisible = true;
    }
}

function clear2() {
    
    
}








//Room 3
function checkIn3() {
    if (room3total > 3) {
        alert("ROOM 3 IS FULL");
    }
    else {
        room3total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi3");
        var u = document.getElementById('userThree').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol3'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userThree').value = " ";
        
    } 
}

function removeMe3() {
    room3total--;
    var personNum = document.getElementById("room3total").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByClassName('newLi3')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room3total').value = " ";
    }

    
function vTest3() {
    //var isVisible = true; 
    if (isVisible == true ) {
    document.getElementById('zThree').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zThree').style.visibility = "visible";
    isVisible = true;
    }
}

function clear3() {
    
}








//Room 4
function checkIn4() {
    if (room4total > 3) {
        alert("ROOM 4 IS FULL");
    }
    else {
        room4total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi4");
        var u = document.getElementById('userFour').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol4'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userFour').value = " ";
        
    } 
}

function removeMe4() {
    room4total--;
    var personNum = document.getElementById("room4total").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByClassName('newLi4')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room4total').value = " ";
    }

    
function vTest4() {
    //var isVisible = true; 
    if (isVisible == true ) {
    document.getElementById('zFour').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zFour').style.visibility = "visible";
    isVisible = true;
    }
}

function clear4() {
    
}









//Room 5
function checkIn5() {
    if (room5total > 3) {
        alert("ROOM 5 IS FULL");
    }
    else {
        room5total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi5");
        var u = document.getElementById('userFive').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol5'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userFive').value = " ";
        
    } 
}

function removeMe5() {
    room5total--;
    var personNum = document.getElementById("room5total").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByClassName('newLi5')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room5total').value = " ";
    }

    
function vTest5() {
    //var isVisible = true; 
    if (isVisible == true ) {
    document.getElementById('zFive').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zFive').style.visibility = "visible";
    isVisible = true;
    }
}

function clear5() {
    
}









//Room 6
function checkIn6() {
    if (room6total > 3) {
        alert("ROOM 6 IS FULL");
    }
    else {
        room6total++;
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        newList.setAttribute("class","newLi6");
        var u = document.getElementById('userSix').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol6'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userSix').value = " ";
        
    } 
}

function removeMe6() {
    room6total--;
    var personNum = document.getElementById("room6total").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByClassName('newLi6')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('room6totalx').value = " ";
    }

    
function vTest6() {
    //var isVisible = true; 
    if (isVisible == true ) {
    document.getElementById('zSix').style.visibility = "hidden"; 
    isVisible = false;
    }
    else {
    document.getElementById('zSix').style.visibility = "visible";
    isVisible = true;
    }
}

function clear6() {
    
}