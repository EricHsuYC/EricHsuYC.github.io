var Visibility = new Boolean(true);



function visibility() {
    if (Visibility == true) {
        document
        .querySelector("#room")
        .object3D.visible = false;

        Visibility = false;
        
      } else {
        document
        .querySelector("#room")
        .object3D.visible = true;


        Visibility = true;
        
      }
}



