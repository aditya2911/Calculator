
let index = [];
let mulIndex;
let operand1;
let operand2;
let mul;
let result = 1;

let workingarr = [];

let currenNum = "";
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
let minifunctionFlag =0
let equalFlag = 0

function realtimeOperation() {
    let realtimeOutput = computeAndOutput();
    console.log("realtimeOutput"+realtimeOutput);
    if(typeof(realtimeOutput)== "number")errorWIndow.textContent = realtimeOutput.toString();
}



// function doNothingWhenNumberInputed(){
//     console.log("here num input")
//     return;
// }

let cursorPosition;
function cursorPosition1() {
    cursorPosition = currentOperandTextElement1.selectionStart;
    return cursorPosition;
}

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// var cursorPosition2 = currentOperandTextElement1.prop("selectionStart");
// console.log({cursorPosition2})
function ifTextElementEmptyAndOperand() {
    if (number == '÷' && this.currentOperand == '') { console.log("he;l"); return; }
    if (number == '×' && this.currentOperand == '') { console.log("he;l"); return; }
}

function  outputOperationColorChanger() {
   
    outputOperationContainer.style.color = "#FF5722";
    errorWIndow.style.color = "#FF5722";
    errorWIndow.textContent = "Format error";
 
}

function defaultOutputOperationColor(){
    errorWIndow.textContent = "";
    outputOperationContainer.style.color = '#1e1e1f'
    errorWIndow.style.color = "#444646";
}

function computeAndOutput() {
    let inputTextElemenet = currentOperandTextElement1.value.toString();
    let tempMUl = inputTextElemenet.toString();

    if(inputTextElemenet==="")return;
    console.log(inputTextElemenet.length);
    let mul = '×';
    let div = '÷';
    let Pi = "π"
    let sqrt1 = '√'
    

    tempMUl = tempMUl.replaceAll(mul, '*');
    tempMUl = tempMUl.replaceAll(div, '/');
    tempMUl = tempMUl.replaceAll(Pi,'(pi)')
    tempMUl = tempMUl.replaceAll(sqrt1,'sqrt');

    // let sqrtoutput ="";

    // if(tempMUl.includes('√')){
    //     console.log("hi sqer gang")
    //     let sqrtIndex = tempMUl.indexOf('√');
    //     console.log({sqrtIndex});
    //     console.log("length:"+tempMUl.length);
    //     for(let index = sqrtIndex+1;index<=tempMUl.length;index++){
    //         console.log("you in");
    //         console.log("true?"+typeof(tempMUl.charAt(index))=='number');
    //         console.log("charAW+"+tempMUl.charAt(index));
    //         let numberCheck = parseInt
    //             if(parseInt(tempMUl.charAt(index))=='number')
    //             {
    //                 sqrtoutput = sqrtoutput +tempMUl.charAt(index);
    //             }
    //     }
    // }
    // console.log({sqrtoutput});
    // tempMUl.replace('√',`sqrt(${sqrtoutput})`);




    console.log({ tempMUl });
    try {
        let output = math.evaluate(tempMUl);
     
        return math.round(output,3);
        
      
    }
    catch (e) {
        if(equalFlag ==1){ 
            outputOperationColorChanger();
           
        }
        equalFlag = 0;


    }
}


function replaceAt(groupofchar, index, replacement) {
    console.log("apna index " + index);
    let tempAttCr = [];
    let iValue = index - 2;
    console.log("RePLACEMENT " + replacement);
    tempAttCr = Array.from(groupofchar.toString());
    console.log("apna array" + tempAttCr);
    let tempReplacementholder = replacement.toString();

    for (let h = iValue; h <= index; h++) {
        let consoleArr = [];
        console.log("i is " + h);
        consoleArr.push(tempAttCr[h]);
        console.log("CONSOLEAR " + consoleArr);

        delete tempAttCr[h];
        console.log("currentCOndtion " + tempAttCr);


    }
    console.log("tempAttCR " + tempAttCr);
    tempAttCr[index - 1] = tempReplacementholder;
    console.log("thisis indexc " + index)
    console.log("tempAttCR " + tempAttCr);


    let temp1 = [];

    for (let j of tempAttCr) {
        j && temp1.push(j);

    }
    console.log("temp1" + temp1.length);
    console.log('this is temp1' + temp1);

    let tempString = '';
    for (let y = 0; y < temp1.length; y++) {
        console.log("temp1 values " + temp1[y]);
        tempString = tempString + temp1[y].toString();
        console.log('we iteratubng' + tempString)
    }
    console.log('tempoString' + tempString.length);
    let test = Array.from(tempString);
    console.log('Test' + test);
    return tempString;

}

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperandText = ''
        this.operation = undefined;
        flag = 0;
        decimalFlag = 0;
        indicator = 0;
        operationFlag = 0;
        workingarr = new Array;
        console.log("THanos " + workingarr);
        subtractFlag = 0;
        subtractFlag1 = 0;
        sqrtFlag =0;
        firstBracketIterator = 0;
        minifunctionFlag =0;
        equalFlag = 0;
        defaultOutputOperationColor();

    }

    delete() {
        if(this.currentOperand.charAt(this.currentOperand.length-1)==')'){console.log("oh frusr brack");firstBracketIterator++;}
        if(this.currentOperand.charAt(this.currentOperand.length-1)=='('){firstBracketIterator--;}
        if(this.currentOperand.charAt(this.currentOperand.length-1)=='.'){decimalFlag =0}
        // if(this.currentOperand.charAt(this.currentOperand.length-1)=='(' && sqrtFlag==0){sqrtFlag =1}
        this.currentOperand = this.currentOperand.toString().slice(0, -1);



        // (currenNum == "") ? "v" : workingarr.push(currenNum);
        // if (workingarr.at(-1) != '') {
        //     let indexElement = workingarr.at(-1);
        //     console.log("indexELement" + indexElement)
        //     let changedElement = indexElement.toString().slice(0, -1);
        //     workingarr[workingarr.length - 1] = changedElement.toString();

        //     if (changedElement == '') workingarr.pop();
        //     console.log("changed man" + changedElement);
        //     console.log("length:" + workingarr.length);
        // }
        // else {
        //     console.log("why are u here");
        //     workingarr.pop();
        // }
        // currenNum = "";

       defaultOutputOperationColor();

        console.log("pop pop " + workingarr);
    }

    appendNumber(number) {


       
        

        defaultOutputOperationColor();

        errorWIndow.textContent ="";
        console.log(number);
        // let cursor = cursorPosition1();
        // if(cursor<currentOperandTextElement1.length){
        //     console.log("you in cursor land")
        //     if (number == '÷' && this.currentOperand == '') { console.log("he;l"); return; }
        //     if (number == '×' && this.currentOperand == '') { console.log("he;l"); return; }
        // }

        if (number == '÷' && this.currentOperand == '') { console.log("he;l"); return; }
        if (number == '×' && this.currentOperand == '') { console.log("he;l"); return; }
        if (number == '^' && this.currentOperand == '') { console.log("he;l"); return; }
        // if (number == '%' && this.currentOperand == '') { console.log("he;l"); return; }

        let currentOperandHolder11 = calculator.currentOperand;

        let lastElement = currentOperandHolder11.charAt(currentOperandHolder11.length - 1)


        if(number == "√" && firstBracketIterator >0 &&sqrtFlag ==1) return;
        // if(number =="√" && sqrtFlag == 0 )
        // {
        //     this.currentOperand = this.currentOperand.toString() + "√"
        //     sqrtFlag = 1;
        // }
        // else{
        //     sqrtFlag =0;
        // }

        
        
        // if(number == "^" && (isNaN(lastElement) ))
        if(number == "^" && (lastElement == '+' || lastElement == '×' || lastElement == '÷' || lastElement == '-' ||lastElement=="("||lastElement=="%" ||lastElement=="^") )return;
        

        if (lastElement == "(" && (number == '×' || number == '÷')) return;
        if (number == '( )') {

            sqrtFlag =0;
            decimalFlag =0;

            // if(firstBracketIterator>0){
            if ((indicator == 1) && (!isNaN(lastElement) ||lastElement == ")" || lastElement == "%" || lastElement == "π" ||lastElement =="!"||lastElement==".")) {
                if (currenNum != "") workingarr.push(currenNum);


                if ((firstBracketIterator > 0) &&  (lastElement == ")" || lastElement == "%" || lastElement == "π" ||lastElement =="!"||lastElement==".")) {
                    this.currentOperand = this.currentOperand.toString() + ")";
                    firstBracketIterator--;
                }
                else{

                if ((firstBracketIterator > 0)) {
                    this.currentOperand = this.currentOperand.toString() + ")";
                    firstBracketIterator--;
                    minifunctionFlag =0;


                }
            }

                console.log("end wale bracket nme ho aap");

                // firstBracketIterator =0;
                // if (firstBracketIterator == 0) indicator = 0;
                currenNum = ""

               
            }
            //}
            else {
                // if(currenNum!="")workingarr.push(currenNum);
              
                this.currentOperand = this.currentOperand.toString() + "("
                indicator = 1;
                currenNum = ""
                firstBracketIterator = firstBracketIterator + 1;
                console.log({ firstBracketIterator });
                calculator.updateDisplay();
            }
        }

        else {
            // if (number == "." && this.currentOperand.includes(".")) return;
            if (number == "." && decimalFlag == 0) {
                console.log("indside decimal land")
                    this.currentOperand = this.currentOperand.toString() + "."
                decimalFlag = 1;
            }
            let currentOperandHolder1 = calculator.currentOperand;

            let a11 = currentOperandHolder1.charAt(currentOperandHolder1.length - 1);

            if (a11 == '×' && number == "-") {
                if (subtractFlag == 0) {
                    this.currentOperand = calculator.currentOperand.toString() + "-";
                    console.log("ypu in subtract land");
                    subtractFlag = 1
                    calculator.updateDisplay();
                }

            }
            else {
                subtractFlag = 0;
                console.log("ypu in HEAVEN land");
            }

            if (a11 == '÷' && number == "-") {
                if (subtractFlag1 == 0) {
                    this.currentOperand = calculator.currentOperand.toString() + "-";
                    console.log("ypu in subtract land 111");
                    subtractFlag1 = 1
                    calculator.updateDisplay();
                }

            }
            else {
                subtractFlag1 = 0;
                console.log("ypu in HEAVEN land 222");
            }

            if (a11 == '%' && number == "-") {
                if (subtractFlag2 == 0) {
                    this.currentOperand = calculator.currentOperand.toString() + "-";
                    console.log("ypu in subtract land 111");
                    subtractFlag2 = 1
                    calculator.updateDisplay();
                }

            }
            else {
                subtractFlag2 = 0;
                console.log("ypu in HEAVEN land 222");
            }

            if (number == '+' || number == '×' || number == '÷' || number == '-') { operationChecker(); }

            // if(number=="√")
            // {
            //     this.currentOperand = this.currentOperand.toString + "√";
            // }
           
            if (number != "."   )
            { 
                console.log("hi number"+number);
                this.currentOperand = this.currentOperand.toString() + number.toString();
                
            }
            


        }


        console.log((number));

        function operationChecker() {
            
            let currentOperandHolder = calculator.currentOperand;
            let a1 = currentOperandHolder.charAt(currentOperandHolder.length - 1);
            let b1 = parseFloat(a1);
            console.log({ b1 });
            console.log({ a1 });
            if (a1 == '+' || a1 == '%' || a1 == '×' || a1 == '÷' || a1 == '-') {
                if (operationFlag == 0) {
                    console.log("you are here");
                  let a =   this.currentOperand = this.currentOperand.toString() + a1
                    operationFlag = 1
                    
                }

            }
            else {
                console.log("must have pressed a number");
                operationFlag = 0;
                
            }
          
        }

        // console.log({convertToNum});

        // if (number == '+' || number == '%' || number == '×' || number == '÷' || number == '-' || number == ')' ||
        //  number == '('|| number == '^'|| number == 'π') {
        //     decimalFlag = 0; return;
        // }

        if(isNaN(number) && number!="."){
            decimalFlag = 0; return;
        }

         //check this stuff
        //  if(number == "√"){
        //     this.currentOperand = this.currentOperand + "√(";
        //     calculator.updateDisplay();

        // }


        // if (number == '( )') {
        //     console.log("inside flag")

        //     if (flag == 1) {
        //         workingarr.push(")")
        //         flag = 0;
        //     }
        //     else {
        //         workingarr.push("(");
        //         flag = 1;
        //     }
        // }
            if (number == '.' && currenNum.includes('.')) {
                console.log("why decimal")
                return;
            
            currenNum += number;
        }

      

    }
    chooseOperation(operation) {
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    pushNumber(operation) {


        workingarr.push(currenNum);
        workingarr.push(operation);


        if (operation == '-' && workingarr.length == 0) {
            workingarr.push(operation);
        }
        currenNum = "";
        console.log("we are working here" + workingarr);
    }

    compute() {

        let storeString = this.currentOperand.toString();
        let operatedString = this.currentOperand.toString();

        // for (let b = 0; b < storeString.length; b++) {
        //     if (operatedString.includes('×'))
        //         console.log("hi " + operatedString)

        //     {
        //         let indexOfMutiSign = operatedString.indexOf('×');
        //         console.log("index:" + indexOfMutiSign)
        //         if (indexOfMutiSign != -1) {
        //             let arrayExample = [];
        //             arrayExample = Array.from(operatedString);

        //             let operandi1 = arrayExample[indexOfMutiSign - 1];
        //             let operandi2 = arrayExample[indexOfMutiSign + 1];
        //             console.log(operandi1 + "operan1");
        //             console.log(operandi2 + "operan2");
        //             let result1 = operandi1 * operandi2;
        //             let tempIndex = indexOfMutiSign + 1;
        //             operatedString = replaceAt(operatedString, tempIndex, result1);
        //             console.log("tumharta " + operatedString)
        //             console.log("this is result" + result1);
        //             currentOperandTextElement1.value = operatedString.toString();
        //         }
        //     }


        // }

       

        let output1 = computeAndOutput();
        
        currentOperandTextElement1.value = output1.toString();
        this.currentOperand = output1.toString();
        if(this.currentOperand.includes("."))decimalFlag =1;
        errorWIndow.textContent = "";
        calculator.updateDisplay();


     
        // let tempArr = this.currentOperand.toString();
        // for (let i = 0; i < tempArr.length; i++) {
        //     if (tempArr[i] == '×') index.push(i + 1); {
        //         // console.log('in')
        //         for (let a = 0; a < index.length; a++) {
        //             mul = index[a];

        //             operand1 = (tempArr.charAt(mulIndex - 1));
        //             operand2 = (tempArr.charAt(mulIndex + 1));
        //             result = operand1 * operand2;
        //             this.currentOperand.c
        //             result = temp * result;
        //             // console.log("multiplication" + result);
        //         }
        //         // index.forEach((xIndex) => {
        //         //      mulIndex = xIndex ;
        //         //      operand1 = tempArr.charAt(mulIndex - 1);
        //         //      operand2 = tempArr.charAt(mulIndex + 1);
        //         //     result = operand1 * operand2
        //         //     console.log("multiplication" + result);

        //         // })

        //     }

        //     if (tempArr.includes("+")) {
        //         console.log('inAdd')
        //         let mulIndex = tempArr.indexOf('+');
        //         let operand1 = tempArr.charAt(mulIndex - 1);
        //         let operand2 = tempArr.charAt(mulIndex + 1);
        //         result = operand1 + operand2
        //         console.log("addition" + result);
        //     }
        // }


        // // console.log(tempArr + "sup");
        // // let output =
        // //     // console.log(output);
        // //     outputScreen.value = output.toString();
    }
    updateDisplay() {
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
const currentOperandTextElement1 = document.querySelector('[data-current-operand]');
const errorWIndow = document.getElementById('error_window_id');
const outputOperationContainer = document.getElementById('output-operation');
const miniFunction = document.querySelectorAll("[data-mini-function]");
const sqrt = document.querySelector("[data-mini-sqrt]");



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement1);

sqrt.addEventListener("click",()=>{
    equalFlag = 0;
    calculator.appendNumber("√");
    sqrtFlag =1;
    calculator.appendNumber("( )");
    calculator.updateDisplay();
    realtimeOperation();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
     
        realtimeOperation();
        
    })
})

operationButton.forEach(b1 => {
    b1.addEventListener("click", () => {
        // console.log(button.innerText)
        equalFlag =0;
        calculator.appendNumber(b1.innerText);
        calculator.updateDisplay();
        calculator.pushNumber(b1.innerText);
    })
})

equalButton.addEventListener('click', () => {
    equalFlag =1;
    calculator.compute();
    
    workingarr.push(currenNum);
    console.log("you pressed equal " + workingarr);
    // calculator.clear();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {

    calculator.clear();
    calculator.updateDisplay();
})

miniFunction.forEach((miniElement)=>{miniElement.addEventListener("click",()=>{
        equalFlag =0;
        calculator.appendNumber(miniElement.innerText);
        calculator.updateDisplay();
        realtimeOperation();
    })
})




numberButtons.forEach((numberBut)=>numberBut.addEventListener("touchstart",()=>{console.log("tu chal raha hai");numberBut.style.backgroundColor = "#D8D9DD"}));
numberButtons.forEach((numberBut)=>numberBut.addEventListener("touchend",()=>{console.log("tu chal raha hai");numberBut.style.backgroundColor = "#f6f7fb"}));

operationButton.forEach((operaBut)=>{operaBut.addEventListener("touchstart",()=>{console.log("tu chal raha hai");operaBut.style.backgroundColor = "#abcbe0"})});
operationButton.forEach((operaBut)=>{operaBut.addEventListener("touchend",()=>{console.log("tu chal raha hai");operaBut.style.backgroundColor = "#c3e7fe"})});

equalButton.addEventListener("touchstart",()=>{console.log("tu chal raha hai");equalButton.style.backgroundColor = "#b7c7de"});
equalButton.addEventListener("touchend",()=>{console.log("tu chal raha hai");equalButton.style.backgroundColor = "#d3E3FD"});

allClearButton.addEventListener("touchstart",()=>{console.log("tu chal raha hai");allClearButton.style.backgroundColor = "#acd1b7"});
allClearButton.addEventListener("touchend",()=>{console.log("tu chal raha hai");allClearButton.style.backgroundColor = "#c3EED0"});

deleteButton.addEventListener("touchstart",()=>{console.log("tu chal raha hai");deleteButton.style.backgroundColor = "#D8D9DD"});
deleteButton.addEventListener("touchend",()=>{console.log("tu chal raha hai");deleteButton.style.backgroundColor = "#f6f7fb"});