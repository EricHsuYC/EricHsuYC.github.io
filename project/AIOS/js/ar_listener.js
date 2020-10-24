var Mkpos1 = new THREE.Vector3();


AFRAME.registerComponent("listener", {

  init: function () {
    var InitArPos = new THREE.Vector3();
    var InitArQuat = new THREE.Quaternion();

    this.el.sceneEl.addEventListener("enter-vr", ev => {
      if (this.el.sceneEl.is("ar-mode")) {
        IsAr = true;
        console.log("enter AR");

        removeScene();


          document
          .querySelector("#arViewpoint")
          .object3D.getWorldPosition(InitArPos);

          document
          .querySelector("#arViewpoint")
          .object3D.getWorldQuaternion(InitArQuat);

          document
          .querySelector("#rig")
          .object3D.position.copy(InitArPos);
          // console.log(InitArPos);
          // document
          // .querySelector("#rig")
          // .object3D.setRotationFromQuaternion(InitArPos);

        // document.querySelector("#rig").object3D.rotation.set(0, 180, 0);
      } else {
        IsAr = false;
        console.log("enter VR");

        document
          .querySelector("#rig")
          .object3D.position.set(0, 0, 0);
        document.querySelector("#rig").object3D.rotation.set(0, 0, 0);
      }
    });
    this.el.sceneEl.addEventListener("exit-vr", ev => {
      IsAr = false;
      console.log("exit AR");
    });




    // get marker position

    Mkpos1 =
      document
        .querySelector("#mk1")
        .object3D.position;




  }
});