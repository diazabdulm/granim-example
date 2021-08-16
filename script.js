let playGradientButton = document.querySelector("#play-gradient");
let pauseGradientButton = document.querySelector("#pause-gradient");

let options = {
    element: "#granim-canvas",
    states: {
        "default-state": {
            gradients: [
                ["#DA22FF", "#9733EE"], // first gradient
                ["#02AAB0", "#00CDAC"] // second gradient
            ]
        }
    },
    image: {
        source: "background.jpg",
        blendingMode: "multiply",
        position: ["center", "center"],
        stretchMode: ['stretch-if-bigger', 'stretch-if-bigger']
    }
}

let granimInstance = new Granim(options);


// EVENTS/ACTIONS:
pauseGradientButton.onclick = function () {
    console.log("gradient paused");
    granimInstance.pause();
}

playGradientButton.onclick = function () {
    console.log("gradient played");
    granimInstance.play();
}