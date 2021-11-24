class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperandText= ''
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        console.log(number);
        if(number == '÷' &&  this.currentOperand == '') {console.log("he;l");return;}
        if(number == '×' &&  this.currentOperand == '') {console.log("he;l");return;}
        if(number == '%' &&  this.currentOperand == '') {console.log("he;l");return;}
        else{
        if(number == "." && this.currentOperand.includes("."))return;
        this.currentOperand = this.currentOperand.toString() +number.toString();
    }}
    chooseOperation(operation){
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    compute(){
        console.log(this.currentOperand);
        let output =  Function(this.currentOperand);
        console.log(output);
        outputScreen.value = output.toString();
    }
    updateDisplay(){
        // outputScreen.style.width = "3.5rem"/this.currentOperand.length ;
        // outputScreen.style.maxWidth = "10ch";

        this.currentOperandTextElement.value = this.currentOperand;
        //  a = outputScreen.getSelection();
        let length = outputScreen.value.length;
        outputScreen.focus();
        // this.previousOperandTextElement.textContent = this.previousOperand;
    }
}



const outputScreen = document.getElementById("output-id");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement1= document.querySelector('[data-current-operand]');



const  calculator = new Calculator(previousOperandTextElement,currentOperandTextElement1);

numberButtons.forEach(button =>{
 button.addEventListener("click",()=>{
     calculator.appendNumber(button.innerText);
     calculator.updateDisplay();
 })})

 operationButton.forEach(button =>{
    button.addEventListener("click",()=>{
        console.log(button.innerText)
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })})

    equalButton.addEventListener('click',()=>{
        calculator.compute();
        calculator.clear();
    });
    
    deleteButton.addEventListener('click',()=>{
        calculator.delete();
        calculator.updateDisplay();
       })

       allClearButton.addEventListener('click',()=>{

        calculator.clear();
        calculator.updateDisplay();
       })