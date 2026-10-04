

// THESE ARE ALL OF THE BACK BUTTON CONSTANTS  IN THIS PROJECT
const backButton = document.getElementById("backButton");// back button on the all formula page 
const squarePerimeterBackButton = document.getElementById("squarePerimeterBackButton")// this is the back button on the physics page 
const squareAreaBackButton = document.getElementById("squareAreaBackButton")// this is the back button on the physics page 
const rectanglePerimeterBackButton = document.getElementById("rectanglePerimeterBackButton")// this is the
const rectangleAreaBackButton = document.getElementById("rectangleAreaBackButton")// this is the back button on the physics page 
const physicsBackButton = document.getElementById("physicsBackButton")// this is the back button on the physics page 
const mathBackButton = document.getElementById("mathBackButton");// back button on the math formula page 




// THESE ARE ALL OF THE PAGES IN THIS PROJECTS 
const squarePerimeterPage = document.querySelector(".squarePerimeterPage")// square perimeter pages 
const squareAreaPage = document.querySelector(".squareAreaPage");// this is the rectangles area page 
const rectanglePerimeterPage = document.querySelector(".rectanglePerimeterPage");// this is the rectangles area page 
const rectangleAreaPage = document.querySelector(".rectangleAreaPage");// this is the rectangles area page 
const physicsFormulaPage = document.querySelector(".physicsFormulaPage")// this is the physics formula page 
const mathFormulaPage = document.querySelector(".mathFormulaPage"); // the formula page, math only
const formulaPage = document.querySelector(".formulaPage");// formula page 
const startPage = document.querySelector(".StartPage");// starting page 




// THESE ARE THE MAIN MENU SCREEN BUTTONS 
const allFormulaButton = document.getElementById("allFormulaButton"); // the formula page button (all formulas)
const mathButton = document.getElementById("mathButton"); // this is the math formula button 
const physicsButton = document.getElementById("physicsButton");// this is the physics formula putton on the starting page 



//THESE ARE ALL THE BUTONS FROM THE ALL FORMULA SCREEN
const allrectangleAreaButton = document.getElementById("allrectangleAreaButton");// this is the rectangle area formula button all formula page
const allrectanglePerimeterButton = document.getElementById("allrectanglePerimeterButton");// this is the rectangle area formula button all formula page
const allsquareAreaButton = document.getElementById("allsquareAreaButton");// this is the rectangle area formula button all formula page
const allsquarePerimeterButton = document.getElementById("allsquarePerimeterButton")// square perimeter pages 



//THESE ARE ALL THE BUTTONS FROM THE MATH ONLY FORMULA SCREEN 
const rectangleAreaButton = document.getElementById("rectangleAreaButton");// this is the rectangle area formula button math formula page only
const rectanglePerimeterButton = document.getElementById("rectanglePerimeterButton");// this is the rectangle area formula button math formula page only
const squareAreaButton = document.getElementById("squareAreaButton");// this is the rectangle area formula button math formula page only
const squarePerimeterButton = document.getElementById("squarePerimeterButton")// square perimeter pages 



// THESE ARE FOR THE RECTANGLE AREA CALCULATOR
const lengthInput = document.getElementById("length"); // you length input 
const widthInput = document.getElementById("width");// your width input 
const calculateRectangleArea = document.getElementById("calculateRectangleArea");// the calculate button 
const rectangleAreaResult = document.getElementById("rectangleAreaResult");// the line that gives u the answer



// THESE ARE FOR THE RECTANGLE PERIMETER CALCULATOR
const PerimeterlengthInput = document.getElementById("Perimeterlength"); // you length input 
const PerimeterwidthInput = document.getElementById("Perimeterwidth");// your width input 
const calculateRectanglePerimeter = document.getElementById("calculateRectanglePerimeter");// the calculate button 
const rectanglePerimeterResult = document.getElementById("rectanglePerimeterResult");// the line that gives u the answer



// THESE ARE FOR THE SQUARE AREA CALCULATOR 
const SquareAreaDimenstion = document.getElementById("SquareAreaDimenstion"); // you dimentsion input 
const calculateSquareArea = document.getElementById("calculateSquareArea");// the calculate button 
const squareAreaResult = document.getElementById("squareAreaResult");// the line that gives u the answer



//THESE ARE FOR THE  SQUARE PERIMETER CALCULATOR 
const SquarePerimeterDimenstion = document.getElementById("SquarePerimeterDimenstion");// square dimentions for area 
const calculateSquarePerimeter = document.getElementById("calculateSquarePerimeter");// square perimiter calculate button 
const squarePerimeterResult = document.getElementById("squarePerimeterResult");// the line that gives u the answer





// THESE  ARE WHERE ALL THE CALCULATIONS ARE HAPPENING, THIS IS WHERE YOU TELL THE CALCULATOR WHAT TO DO WITH THE INPUTS  

calculateRectangleArea.addEventListener("click", function() {// calculate putton is pressed on area rectangle screen 

    const length = Number(lengthInput.value);// stores the length of the rectangle 

    const width = Number(widthInput.value);// stores the width of the rectangle 

    const area  = length*width;// calculates the area of the rectangle (LENGH TIMES WIDHT)

    rectangleAreaResult.textContent = "Area = " + area + " Units Squared";// displays the area of the rectangle on the screen 
});

calculateRectanglePerimeter.addEventListener("click", function() {// calculate button is presses (rectangles perimeter screen )

    const perimeterlength = Number(PerimeterlengthInput.value);// stores the lenght of the rectangle 

    const perimeterwidth = Number(PerimeterwidthInput.value);// stores the width of the rectangle 

    const perimeter  = 2*(perimeterlength + perimeterwidth);// calculates the perimeter ( 2 times the lenght and width combained)

    rectanglePerimeterResult.textContent = "Perimeter = " + perimeter + " Units";// displays the perimeter of the rectangle on the screen
});

calculateSquareArea.addEventListener("click", function() {// calculate button is pressed on square area screen 

    const DimenstionSquareArea = Number(SquareAreaDimenstion.value);// stores the Dimenstions of the square 

    const SquareArea  = DimenstionSquareArea * DimenstionSquareArea;// calculates the area (L x W)

    squareAreaResult.textContent = "Area = " + SquareArea + " Units Squared";// displays the area on the screen 
});

calculateSquarePerimeter.addEventListener("click", function() {// calculate button ispressed, then solve the perimiter of the square
    const DimenstionSquarePerimeter = Number(SquarePerimeterDimenstion.value)// stores the perimiter dimetion of the square 
    
    const SquarePerimeter = DimenstionSquarePerimeter + DimenstionSquarePerimeter + DimenstionSquarePerimeter + DimenstionSquarePerimeter;// this shows the operation L + L + L + L + PERIMETER
    
    squarePerimeterResult.textContent = "Perimeter = " + SquarePerimeter + " Units";// displays the perimeter  of the square 
})






// TTHIS IS WHERE ALL OF THE BUTTONS ARE AND WHERE ALL OF THE NAVIGATION IS HAPPENING (YOU TEL WHAT TO SHOW WHEN A BUTTON IS CLICKED)

allFormulaButton.addEventListener("click", function(){// all formulas page menu 
    startPage.style.display = "none";// the start page diss apears 
    formulaPage.style.display = "flex";// the formula page apears 
})

backButton.addEventListener("click", function() {// back button all formulas bage 
    formulaPage.style.display = "none";// the formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

mathButton.addEventListener("click", function() {// math menu button 
    startPage.style.display = "none";// hide the start screen 
    mathFormulaPage.style.display = "flex";// show the math formula page 

});

mathBackButton.addEventListener("click", function() {// back button math menu 
    mathFormulaPage.style.display = "none";// the math only formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

physicsBackButton.addEventListener("click", function() {// back button physics formula mneue 
    physicsFormulaPage.style.display = "none";// the math only formula page dissapears 
    startPage.style.display = "flex";// the starte page becomes visible 
})

physicsButton.addEventListener("click", function() {// physics formula menue 
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

allsquareAreaButton.addEventListener("click", function() {// takes you tot he square area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    squareAreaPage.style.display = "flex"// the square area screen is visible 
    rectangleAreaPage.style.display = "none"// dont show the rectangle are page 
    rectanglePerimeterPage.style.display = "none"// dont show the perimiter page 
});

allsquarePerimeterButton.addEventListener("click", function() {// what to do if the square perimeter formul button is pressed on the all frmula screen 
    startPage.style.display = "none"; // start page is hiddern 
    mathFormulaPage.style.display = "none";// hides this page 
    formulaPage.style.display = "none"; // hides this page 
    squareAreaPage.style.display = "none";// hides this page 
    rectangleAreaPage.style.display = "none";// hides this page 
    rectanglePerimeterPage.style.display = "none"// hides this page 
    squarePerimeterPage.style.display = "flex";// shows the perimeter pages 
})

squarePerimeterButton.addEventListener("click", function() {// what to do if the square perimiter formul button is pressed 
    startPage.style.display = "none";// hides this page 
    mathFormulaPage.style.display = "none";// hides this page 
    formulaPage.style.display = "none";// hides this page 
    squareAreaPage.style.display = "none";// hides this page 
    rectangleAreaPage.style.display = "none";// hides this page 
    rectanglePerimeterPage.style.display = "none";// hides this page 
    squarePerimeterPage.style.display = "flex";// shows this page 
})

squareAreaButton.addEventListener("click", function() {// takes you tot he square area screen 
    startPage.style.display = "none";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    squareAreaPage.style.display = "flex"// the square area screen is visible
    rectangleAreaPage.style.display = "none"// dont show the rectangle are page 
    rectanglePerimeterPage.style.display = "none"// dont show the perimiter page 
});

squareAreaBackButton.addEventListener("click", function() { // area bck button rectangle
    startPage.style.display = "flex";// the start page is not visibe
    mathFormulaPage.style.display = "none";// the math formula page dissapears 
    formulaPage.style.display = "none";// the formula page dissapears 
    squareAreaPage.style.display = "none"// the rectangle area screen is visible
    
   SquareAreaDimenstion.value = "";// rests the inpus value 
   squareAreaResult.textContent = "";// thiss removes the answer text from the bottom when you exit 

});

squarePerimeterBackButton.addEventListener("click", function() {// back button on sqaure perimeter screen 
    startPage.style.display = "flex";// shows the start screen 
    mathFormulaPage.style.display = "none";// hides it 
    formulaPage.style.display = "none";// hides it 
    squarePerimeterPage.style.display = "none";//hides it

    SquarePerimeterDimenstion.value = "";// removes the value 
    squarePerimeterResult.textContent = ""; // removes the line of text 
})