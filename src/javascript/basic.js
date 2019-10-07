console.log("Hello World from basic.js");

let button = document.getElementById("pbutton");
let input = document.getElementById("uinput");


function insertElement(sizeText) {
    let para = document.createElement("p");
    let node = document.createTextNode(sizeText);

    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

function size(integer) {
    if (integer < 10) {
        return "small";
    } else if (integer >= 10 && integer <=19) {
        return "med";
    } else return "large";

};

function onButtonClicked() {
    console.log("I'm in the button click event");
    console.log(input.value);
    size(input.value);
    insertElement(size(input.value));
}


button.addEventListener("click", onButtonClicked);