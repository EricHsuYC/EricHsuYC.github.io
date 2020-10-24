var RigPos = new THREE.Vector3();
var RigRot = new THREE.Quaternion();
// var arViewpointObj = new THREE.Object3D();

// var groupObject3D = document.querySelector('a-entity').Object3D;

function setRig(pos, rotat) {


  // console.log(pos);

  document
    .querySelector("#arViewpoint")
    .object3D.position.set(pos.x*0.1*-1,-1.2,pos.z*0.1*-1);



    document
    .querySelector("#arViewpoint")
    .object3D.setRotationFromQuaternion(rotat);
  // console.log(abc.x + "/" + abc.y + "/" + abc.z);



  // var abc = new THREE.Vector3();
  // document
  //   .querySelector("#arViewpoint")
  //   .object3D.getWorldPosition(abc)
  // console.log(abc.x +"/"+abc.y+"/"+abc.z);


  // Mkpos1 =
  //   document
  //     .querySelector("#mk1")
  //     .object3D.position;
  // console.log(Mkpos1);。。
  // var _campos = getWorldPosition(camera.getObject3D("camera"));
  // var _campos = new THREE.Vector3();
  // _campos = groupObject3D.position;
  // document.querySelector("#rig").Object3D.getWorldPosition(_campos);
  // arViewpoint.object3D.position.set(_campos);

  // document
  // .querySelector("#arViewpoint")
  // .object3D.position
  // document.querySelector("#arViewpoint").Object3D.position.set(_campos);





  // lookCube.setAttribute(
  //   "position",
  //   camera.getObject3D("camera").position
  // );

  // pos, rotat

}

// setInterval(setRig(), 200);
