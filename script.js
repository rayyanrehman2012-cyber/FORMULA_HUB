
// These are all of the constand variables for this project 

const allFormulaButton = document.getElementById("allFormulaButton"); // the formula page button (all formulas)
const startPage = document.querySelector(".StartPage");// starting page 
const formulaPage = document.querySelector(".formulaPage");// formula page 
const backButton = document.getElementById("backButton");// back button on the all formula page 
const mathButton = document.getElementById("mathButton"); // this is the math formula button 
const mathFormulaPage = document.querySelector(".mathFormulaPage"); // the formula page, math only
const mathBackButton = document.getElementById("mathBackButton");// back button on the math formula page 



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
