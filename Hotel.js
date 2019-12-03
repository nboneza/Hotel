//Room 1
function checkIn() {
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 1 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('user').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol1'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('user').value = " ";
        
    } 
}

function removeMe() {
    var personNum = document.getElementById("remNum").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNum').value = " ";
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
    var q = document.getElementById("room1").innerHTML = " ";
}









//Room 2
function checkIn2() {
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 2 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('userTwo').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol2'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userTwo').value = " ";
        
    } 
}

function removeMe2() {
    var personNum = document.getElementById("remNumTwo").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNumTwo').value = " ";
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
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 3 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('userThree').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol3'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userThree').value = " ";
        
    } 
}

function removeMe3() {
    var personNum = document.getElementById("remNumThree").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNumThree').value = " ";
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
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 4 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('userFour').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol4'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userFour').value = " ";
        
    } 
}

function removeMe4() {
    var personNum = document.getElementById("remNumFour").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNumFour').value = " ";
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
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 5 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('userFive').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol5'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userFive').value = " ";
        
    } 
}

function removeMe5() {
    var personNum = document.getElementById("remNumFive").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNumFive').value = " ";
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
    var stuff = document.getElementsByTagName('li');
    if (stuff.length > 3) {
        alert("ROOM 6 IS FULL");
    }
    else {
        var x = new Date();
        var y = x.toLocaleString();
        var newList = document.createElement('li');
        var u = document.getElementById('userSix').value + ' '+y ;
        var newText = document.createTextNode(u);
        newList.appendChild(newText);
        var position = document.getElementById('ol6'); // I am getting the OL by its ID.
        position.appendChild(newList);
        document.getElementById('userSix').value = " ";
        
    } 
}

function removeMe6() {
    var personNum = document.getElementById("remNumSix").value;
    var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
    document.getElementById('remNumSix').value = " ";
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