    //fix loot-at with orbit-control
    AFRAME.registerComponent("fixorbit", {
        tick: function () {
          lookCube.setAttribute(
            "position",
            camera.getObject3D("camera").position
          );
        }
      });