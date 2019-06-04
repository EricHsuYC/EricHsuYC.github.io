AFRAME.registerComponent('helper', {


    copyToClipboard: function (input) {
        input.select();
        document.execCommand('copy');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    },


    init: function () {
        console.log('helper init');
        var camObj = document.querySelector('[camera]').object3D;
        var myPoint = "";
        document.addEventListener('click', function () {
            var myPoint = camObj.getWorldDirection().multiplyScalar(-3).add(camObj.getWorldPosition());
            var cords = myPoint.x.toFixed(2) + ' ' + myPoint.y.toFixed(2) + ' ' + myPoint.z.toFixed(2);
            var selInput = document.querySelector('#myInput');
            selInput.value = cords;
            selInput.select();
            document.execCommand('copy');

            console.log(cords);

        });

    },

    tick: function () {
        // Don't call query selector in here, query beforehand.

    }
});