// initialize variable for iterating

let index = [];
let mulIndex;
let operand1;
let operand2;
let mul;
let result = 1;


// creating variable which will serves as flag to decide if a input should be allowed or not

let flag = 0;
let indicator = 0;
let decimalFlag = 0;
let convertToNum;
let operationFlag = 0;
let subtractFlag = 0;
let subtractFlag1 = 0;
let subtractFlag2 = 0;
let firstBracketIterator = 0;
let sqrtFlag = 0;
let minifunctionFlag = 0
let equalFlag = 0
let firstOperandFlag = 0;
let lastinput;


// helper function which produces output and display it on secondary text field

function realtimeOperation() {


    let realtimeOutput = computeAndOutput();

    if (typeof (realtimeOutput) == "number" && firstOperandFlag == 1) errorWIndow.value = realtimeOutput.toString();
}


// used to disable the default behaviour of browser
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// helper function which checks if text field is empty and decides if to allow input to display
function ifTextElementEmptyAndOperand() {
    if (number == '÷' && this.currentOperand == '') { return; }
    if (number == '×' && this.currentOperand == '') {  return; }
}


// function that changes color of font on format error
function outputOperationColorChanger() {

    outputScreen.style.color = "#FF5722";
    errorWIndow.style.color = "#FF5722";
    errorWIndow.value = "Format error";

}



// function that changes color of font to default color when user All clear , inputs or delete some inputs
function defaultOutputOperationColor() {
    errorWIndow.value = "";
    outputScreen.style.color = '#1e1e1f'
    errorWIndow.style.color = "#444646";
}


// helper function which takes the input from @output-screen , computes and outputs its;
function computeAndOutput() {
    let inputTextElemenet = currentOperandTextElement1.value.toString();
    let tempMUl = inputTextElemenet.toString();


// basic check to see if @output-screen is empty
    if (inputTextElemenet === "") return;

    let mul = '×';
    let div = '÷';
    let Pi = "π"
    let sqrt1 = '√'


    // replaces the above characters , to allow easy parsing and computation by our mathJS library
    tempMUl = tempMUl.replaceAll(mul, '*');
    tempMUl = tempMUl.replaceAll(div, '/');
    tempMUl = tempMUl.replaceAll(Pi, '(pi)')
    tempMUl = tempMUl.replaceAll(sqrt1, 'sqrt');




  
    try {

        // mathJs library computes 
        let output = math.evaluate(tempMUl);

        // output rounded to 3 digits
        return math.round(output, 3);


    }
    catch (e) {

        // equalFlag is used to check if user pressed equal button and 
        //then only allow any format error to show
        if (equalFlag == 1) {
            outputOperationColorChanger();

        }
        equalFlag = 0;


    }
}



// class Calculator which will contain all our basic operation

class Calculator {
    constructor( currentOperandTextElement) {
    
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }


// all clear function which reset every value and flags
    clear() {
        this.currentOperand = '';
        this.previousOperandText = ''
        this.operation = undefined;
        flag = 0;
        decimalFlag = 0;
        indicator = 0;
        operationFlag = 0;
        subtractFlag = 0;
        subtractFlag1 = 0;
        sqrtFlag = 0;
        firstBracketIterator = 0;
        minifunctionFlag = 0;
        equalFlag = 0;
        firstOperandFlag = 0;

        // defaults colors of font on all clear
        defaultOutputOperationColor();

    }

    delete() {

        //reset flag when a respective input is deleted
        if (this.currentOperand.charAt(this.currentOperand.length - 1) == ')') {  firstBracketIterator++; indicator =1;}
        if (this.currentOperand.charAt(this.currentOperand.length - 1) == '(') { firstBracketIterator--;}
        if (this.currentOperand.charAt(this.currentOperand.length - 1) == '.') { decimalFlag = 0 }

       // removing last input
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

        defaultOutputOperationColor();

       
    }

    // helper function that appends number to end and also decides whether a input should be appended
    appendNumber(number) {

        defaultOutputOperationColor();

        // resetting secondary text element
        errorWIndow.value = "";
       

            // doesnot allow following operation to display  if the text input is empty
        if (number == '÷' && this.currentOperand == '') { return; }
        if (number == '×' && this.currentOperand == '') { return; }
        if (number == '^' && this.currentOperand == '') { return; }


        let currentOperandHolder11 = calculator.currentOperand;

        let lastElement = currentOperandHolder11.charAt(currentOperandHolder11.length - 1);



        // deciding whether operation should be appended  or not based on last and second last element
        if (number == "√" && firstBracketIterator > 0 && sqrtFlag == 1) return;

        if (number == "^" && (lastElement == '+' || lastElement == '×' || lastElement == '÷' || 
        lastElement == '-' || lastElement == "("  || lastElement == "^")) return;

        if (lastElement == "(" && (number == '×' || number == '÷')) return;



        if (number == '( )') {

            sqrtFlag = 0;
            decimalFlag = 0;


            // deciding based on indicator flag what should be done, also check last element is a number
            if ((indicator == 1) && (!isNaN(lastElement) || lastElement == ")" || lastElement == "%" ||
             lastElement == "π" || lastElement == "!" || lastElement == ".")) {
             
                    console.log("end bracket 11");

                // iterator that closes all the remaining opening brackets for the following operations
                if ((firstBracketIterator > 0) && (lastElement == ")" ||
                 lastElement == "%" || lastElement == "π" || lastElement == "!" || lastElement == ".")) {

                    this.currentOperand = this.currentOperand.toString() + ")";
                    firstBracketIterator--;
                    if(firstBracketIterator ==0){ indicator =0;}
                    console.log("end bracket 22");
                }
                else {


                        // iterator that closes all the remaining opening brackets
                    if ((firstBracketIterator > 0)) {
                        this.currentOperand = this.currentOperand.toString() + ")";
                        firstBracketIterator--;
                        minifunctionFlag = 0;
                        
                        
                        console.log("end bracket 333 iterator")
                        console.log(firstBracketIterator);
                        if(firstBracketIterator == 0) {indicator = 0;}

                    }
                
             
                 
                }
             
               
            }
            

            else {


                // creates a opening bracket and set @indicator to 1
                this.currentOperand = this.currentOperand.toString() + "("
                indicator = 1;
                firstBracketIterator = firstBracketIterator + 1;
                
                calculator.updateDisplay();
                console.log("opening bracket");
            }
        }

        else {

            // if the input is not == "( )"

            // checks if a number has a decimal pound , if not then adds it else does nothing
            if (number == "." && decimalFlag == 0) {
              
                this.currentOperand = this.currentOperand.toString() + "."
                decimalFlag = 1;
            }
           
            let currentOperandHolder1 = calculator.currentOperand;

            // gets the last element from @currentOperandHolder1
            let a11 = currentOperandHolder1.charAt(currentOperandHolder1.length - 1);

           
           // checks last element and then only allows if the minus operation should be allowed or not

           // for multiply  operation
            if (a11 == '×' && number == "-") {
                if (subtractFlag == 0) {
                    this.currentOperand = calculator.currentOperand.toString() + "-";
                 
                    subtractFlag = 1
                    calculator.updateDisplay();
                }

            }
            else {
                subtractFlag = 0;
         
            }

            // for divide operation
            if (a11 == '÷' && number == "-") {
                if (subtractFlag1 == 0) {
                    this.currentOperand = calculator.currentOperand.toString() + "-";
             
                    subtractFlag1 = 1
                    calculator.updateDisplay();
                }

            }
            else {
                subtractFlag1 = 0;
           
            }

       
            // calls the function operationChecker if user input following opertions
            if (number == '+' || number == '×' || number == '÷' || number == '-') { operationChecker(); }


            // checks if a input is not a decimal , following if statement is used by most buttons of calculator
            if (number != ".") {
                this.currentOperand = this.currentOperand.toString() + number.toString();

            }



        }


  
// helper function that decide what input should be appended , depending on operation
        function operationChecker() {

            let currentOperandHolder = calculator.currentOperand;

            // gets last element
            let a1 = currentOperandHolder.charAt(currentOperandHolder.length - 1);
        
        
            if (a1 == '+'  || a1 == '×' || a1 == '÷' || a1 == '-') {

                // operationFlag for checking if number should be appended or not
                if (operationFlag == 0) {
             
                    let a =  this.currentOperand.toString() + a1
                    operationFlag = 1

                }

            }
            else {
                // reset operationFlag = 0 if user does not input following input
                operationFlag = 0;

            }

        }


        // reset  decimal flag if the input is not a number and not a decimal
        if (isNaN(number) && number != ".") {
            decimalFlag = 0; return;
        }

     


    }
 

// computes object of our class calculator
    compute() {

      
        let output1 = computeAndOutput();

        currentOperandTextElement1.value = output1.toString();
        this.currentOperand = output1.toString();
        if (this.currentOperand.includes(".")) decimalFlag = 1;
        errorWIndow.value = "";
        calculator.updateDisplay();

    }

    // used to display the output to text fields
    updateDisplay() {


        this.currentOperandTextElement.value = this.currentOperand;

      
        outputScreen.focus();

    }
}



// creating constant object of html elements

const outputScreen = document.getElementById("output-id");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement1 = document.querySelector('[data-current-operand]');
const errorWIndow = document.getElementById('error_window_id');
const outputOperationContainer = document.getElementById('output-operation');
const miniFunction = document.querySelectorAll("[data-mini-function]");
const sqrt = document.querySelector("[data-mini-sqrt]");


// constant object of out class Calculator()
const calculator = new Calculator( currentOperandTextElement1);


// adding event listener to the  object of elements 



sqrt.addEventListener("click", () => {
    firstOperandFlag = 1;
    equalFlag = 0;
    calculator.appendNumber("√");
    sqrtFlag = 1;
    calculator.appendNumber("( )");
    calculator.updateDisplay();
    realtimeOperation();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();

        // for outputing value to secondary display @errorWindow
        realtimeOperation();

    })
})

operationButton.forEach(b1 => {
    b1.addEventListener("click", () => {

        // sets the flag
        equalFlag = 0;
        firstOperandFlag = 1;

        calculator.appendNumber(b1.innerText);
        calculator.updateDisplay();
       
    })
})

equalButton.addEventListener('click', () => {
    // sets the equalFlag
    equalFlag = 1;
    calculator.compute();
outputScreen.blur();

});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
     // for outputing value to secondary display @errorWindow
    realtimeOperation();

    //reset the @firstOperandFlag if textfield is empty
    if ((outputScreen.length == 0) || (outputScreen.value == "")) { firstOperandFlag = 0 }


})

// clear and reset every flag and output text field
allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

// event listener for our factorial , pi,sqrt ,power
miniFunction.forEach((miniElement) => {
    miniElement.addEventListener("click", () => {
        firstOperandFlag = 1;
        equalFlag = 0;
        calculator.appendNumber(miniElement.innerText);
        calculator.updateDisplay();

         // for outputing value to secondary display @errorWindow
        realtimeOperation();
    })
})



// animation effect sets for our mobile devices

numberButtons.forEach((numberBut) => numberBut.addEventListener("touchstart", () => { numberBut.style.backgroundColor = "#D8D9DD" }));
numberButtons.forEach((numberBut) => numberBut.addEventListener("touchend", () => {  numberBut.style.backgroundColor = "#f6f7fb" }));

operationButton.forEach((operaBut) => { operaBut.addEventListener("touchstart", () => {  operaBut.style.backgroundColor = "#abcbe0" }) });
operationButton.forEach((operaBut) => { operaBut.addEventListener("touchend", () => {  operaBut.style.backgroundColor = "#c3e7fe" }) });

equalButton.addEventListener("touchstart", () => {  equalButton.style.backgroundColor = "#b7c7de" });
equalButton.addEventListener("touchend", () => {  equalButton.style.backgroundColor = "#d3E3FD" });

allClearButton.addEventListener("touchstart", () => { allClearButton.style.backgroundColor = "#acd1b7" });
allClearButton.addEventListener("touchend", () => { allClearButton.style.backgroundColor = "#c3EED0" });

deleteButton.addEventListener("touchstart", () => {  deleteButton.style.backgroundColor = "#D8D9DD" });
deleteButton.addEventListener("touchend", () => {  deleteButton.style.backgroundColor = "#f6f7fb" });