// const position = new THREE.Vector3();
var IsAr = false;

function passPos(pos, rotat) {


  if (IsAr) {
  } else {

    RigPos = pos;
    RigRot = rotat;
    setRig(RigPos,RigRot);

    // document
    //   .querySelector("#model")
    //   .object3D.position.set(pos.x * 0.1, pos.y * 0.1, pos.z * 0.1);

    // document
    //   .querySelector("#model")
    //   .object3D.rotation.set(
    //     THREE.Math.degToRad(rotat.x),
    //     THREE.Math.degToRad(rotat.y),
    //     THREE.Math.degToRad(rotat.z)
    //   );

    // document.querySelector("#model").object3D.quaternion.copy(rotat);


    // console.log("model repositioned!!");
  }

  // document.getElementById("model").setAttribute("position", pos);
}

//       var scene = document.querySelector("a-scene");

//       scene.addEventListener("enter-vr", console.log("enter-vr"));
//       scene.addEventListener("enter-ar", console.log("enter-ar"));
//       scene.addEventListener("loaded", console.log("loaded"));

