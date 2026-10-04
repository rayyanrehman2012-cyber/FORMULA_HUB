
// These are all of the constand variables for this project 

const allFormulaButton = document.getElementById("allFormulaButton"); // the formula page button (all formulas)
const startPage = document.querySelector(".StartPage");// starting page 
const formulaPage = document.querySelector(".formulaPage");// formula page 
const backButton = document.getElementById("backButton");// back button on the all formula page 
const mathButton = document.getElementById("mathButton"); // this is the math formula button 
const mathFormulaPage = document.querySelector(".mathFormulaPage"); // the formula page, math only
const mathBackButton = document.getElementById("mathBackButton");// back button on the math formula page 
const physicsFormulaPage = document.querySelector(".physicsFormulaPage")// this is the physics formula page 
const physicsBackButton = document.getElementById("physicsBackButton")// this is the back button on the physics page 
const physicsButton = document.getElementById("physicsButton");// this is the physics formula putton on the starting page 

const rectangleAreaPage = document.querySelector(".rectangleAreaPage");// this is the rectangles area page 
const allrectangleAreaButton = document.getElementById("allrectangleAreaButton");// this is the rectangle area formula button all formula page
const rectangleAreaButton = document.getElementById("rectangleAreaButton");// this is the rectangle area formula button math formula page only
const rectangleAreaBackButton = document.getElementById("rectangleAreaBackButton")// this is the back button on the physics page 

const rectanglePerimeterPage = document.querySelector(".rectanglePerimeterPage");// this is the rectangles area page 
const allrectanglePerimeterButton = document.getElementById("allrectanglePerimeterButton");// this is the rectangle area formula button all formula page
const rectanglePerimeterButton = document.getElementById("rectanglePerimeterButton");// this is the rectangle area formula button math formula page only
const rectanglePerimeterBackButton = document.getElementById("rectanglePerimeterBackButton")// this is the

// for  rectangle area calculator 
const lengthInput = document.getElementById("length"); // you length input 
const widthInput = document.getElementById("width");// your width input 
const calculateRectangleArea = document.getElementById("calculateRectangleArea");// the calculate button 
const rectangleAreaResult = document.getElementById("rectangleAreaResult");// the line that gives u the answer


// for rectangle perimeter calculatore 

const PerimeterlengthInput = document.getElementById("Perimeterlength"); // you length input 
const PerimeterwidthInput = document.getElementById("Perimeterwidth");// your width input 
const calculateRectanglePerimeter = document.getElementById("calculateRectanglePerimeter");// the calculate button 
const rectanglePerimeterResult = document.getElementById("rectanglePerimeterResult");// the line that gives u the answer








// formula fucntions 

calculateRectangleArea.addEventListener("click", function() {// calculate putton is pressed on area rectangle screen 

    const length = Number(lengthInput.value);// stores the lenght 
    const width = Number(widthInput.value);// stores the width 

    const area  = length*width;// calculates the area 

    rectangleAreaResult.textContent = "Area = " + area + " Units Squared";// displays the area 
});


calculateRectanglePerimeter.addEventListener("click", function() {// calculate putton is pressed on perimeter  rectangle screen 

    const perimeterlength = Number(PerimeterlengthInput.value);// stores the lenght 
    const perimeterwidth = Number(PerimeterwidthInput.value);// stores the width 

    const perimeter  = 2*(perimeterlength + perimeterwidth);// calculates the perimeter 

    rectanglePerimeterResult.textContent = "Perimeter = " + perimeter + " Units";// displays the perimeter 
});












// making the buttons work, these are all the buttons 


//all formulas button 
allFormulaButton.addEventListener("click", function(){
    startPage.style.display = "none";// the start page diss apears 
    formulaPage.style.display = "flex";// the formula page apears 
})

// this is the back button on the all formula page 
backButton.addEventListener("click", function() {
    formulaPage.style.display = "none";// the formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

// this is the math formula button on the starting page 
mathButton.addEventListener("click", function() {
    startPage.style.display = "none";
    mathFormulaPage.style.display = "flex";

});

// this is the back button on the math formula page 
mathBackButton.addEventListener("click", function() {
    mathFormulaPage.style.display = "none";// the math only formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

physicsBackButton.addEventListener("click", function() {
    physicsFormulaPage.style.display = "none";// the math only formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

physicsButton.addEventListener("click", function() {
    startPage.style.display = "none";// the start page is not visible 
    physicsFormulaPage.style.display = "flex";// the physics page isvisible 

});

allrectangleAreaButton.addEventListener("click", function() {// takes you tot he rectanke area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "flex"// the rectangle area screen is visible 

});

rectangleAreaButton.addEventListener("click", function() {// takes you tot he rectanke area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "flex"// the rectangle area screen is visible 

});


rectanglePerimeterButton.addEventListener("click", function() {// takes you tot he rectanke area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectanglePerimeterPage.style.display = "flex"// the rectangle area screen is visible 

});

allrectanglePerimeterButton.addEventListener("click", function() {// takes you tot he rectanke area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectanglePerimeterPage.style.display = "flex"// the rectangle area screen is visible 

});

rectangleAreaBackButton.addEventListener("click", function() { // area bck button rectangle
    startPage.style.display = "flex";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "none"// the rectangle area screen is visible
    
    lengthInput.value = "";// rests the inpus value 
    widthInput.value = "";// restes the input value 
    rectangleAreaResult.textContent = "";// thiss removes the answer text from the bottom when you exit 

});


rectanglePerimeterBackButton.addEventListener("click", function() {// back button rectangle perimiter pages 

    startPage.style.display = "flex";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectanglePerimeterPage.style.display = "none"// the rectangle area screen is visible
    
    PerimeterlengthInput.value = "";// rests the inpus value 
    PerimeterwidthInput.value = "";// restes the input value 
    rectanglePerimeterResult.textContent = "";// thiss removes the answer text from the bottom when you exit 

});