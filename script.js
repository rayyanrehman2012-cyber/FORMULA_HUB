
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



// making the buttons work

// this is the all formulas button on the start page 
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

allrectangleAreaButton.addEventListener("click", function() {
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "flex"// the rectangle area screen is visible 

});

rectangleAreaButton.addEventListener("click", function() {
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "flex"// the rectangle area screen is visible 

});

rectangleAreaBackButton.addEventListener("click", function() {
    startPage.style.display = "flex";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    rectangleAreaPage.style.display = "none"// the rectangle area screen is visible 

});

