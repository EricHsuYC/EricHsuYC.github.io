function addScene() {
    var scene = document.createElement("iframe");
    scene.setAttribute("src", "ar.html");
    scene.setAttribute("id", "iframe");
    // scene.setAttribute("width", "50%");
    // scene.setAttribute("height", "50%");
    // scene.setAttribute("style", "position:fixed;margin:auto;z-index:1");
    scene.setAttribute("frameBorder", "0");
    document.querySelector("#text").appendChild(scene);
}



function removeScene() {
    document.getElementById("iframe").remove();
}