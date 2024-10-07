//Functions

//Generating different Grid sizes
const boxGenerator = function (s, chosenColor, borderState, bgColor){
    for (i = 0; i < s*s; i ++){
        const box1 = document.createElement("div");
        box1.classList.add("box");
    
        const container = document.querySelector("#container");
        container.appendChild(box1);
    }
    
    const boxes = document.querySelectorAll(".box");
    const boxSize = 640/s
    
    boxes.forEach((box) => {
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = bgColor;
        box.addEventListener("mouseenter", changeColor)
        if (borderState){
            box.classList.add("borderActive")
        }
    })  
}

//Removing all boxes
const removeBoxes = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    })
}

//Changing grid size
const changeGrid = () => {
    rangeValue.textContent = `${range.value} × ${range.value}`
    let boxSize = range.value;
    removeBoxes();
    boxGenerator(boxSize, currentColor, borderState, bgColor);
}

//Changing the color of the boxes
const changeColor = (event) => {
    if (rainbowState) {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, ${70 + Math.random() * 20}%, ${60 + Math.random() * 20}%)`;
    } else {
        event.target.style.backgroundColor = currentColor;
    }
};

//Changing the background color
const changeBgColor = () => {
    bgColor = bgColorPicker.value;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor = bgColor;
    })
}

//Adding border to the boxes
const addBorder = () => {
    borderState = !borderState;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.classList.toggle("borderActive")
    })
}

//Reseting the color to white
const clearBoxes = () =>{
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

//Variables

//Handling the border button and state
const borderButton = document.querySelector("#borderButton")
let borderState = false;
borderButton.addEventListener("click", addBorder)

//Handling the color of the pen
const colorPicker = document.querySelector("#colorPicker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("input", () => {
    rainbowState = false;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.removeEventListener("mouseenter", changeColor);
        box.addEventListener("mouseenter", changeColor);
    });
    currentColor = colorPicker.value;
    }
)

//Handling the range input
const range = document.querySelector("#range")
const rangeValue = document.querySelector("#rangeValue")
let boxSize = range.value;
rangeValue.textContent = `${range.value} × ${range.value}`
range.addEventListener("input", changeGrid)

//Handling the clear button
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clearBoxes);

//Handling the background color
const bgColorPicker = document.querySelector("#bgColorPicker");
let bgColor = bgColorPicker.value;
bgColorPicker.addEventListener("input", changeBgColor)

//Handling rainbow button
const rainbowBtn = document.querySelector("#rainbowBtn");
const colorValue = document.querySelector("#colorValue");
let rainbowState = false;
rainbowBtn.addEventListener("click", () =>{
    rainbowState = !rainbowState;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.removeEventListener("mouseenter", changeColor);
        box.addEventListener("mouseenter", changeColor);
    });
})

//Initial Grid
boxGenerator(50, "black", borderState, "white");

