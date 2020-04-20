//document.addEventListener('contextmenu', event => event.preventDefault());

var list = document.getElementsByTagName("UL")[0];
list.style.display = "none";


function rightclick() {
    var rightclick;
    var e = window.event;
    if (e.which) rightclick = (e.which == 3);
    else if (e.button) rightclick = (e.button == 2);
    alert("Right mouse button " + (isRightMB ? "" : " was not") + "clicked!");
}

document.body.onclick = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3; 
    else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2; 

    alert("Right mouse button " + (isRightMB ? "" : " was not") + "clicked!");
} 