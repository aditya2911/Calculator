const DATA_ONE = "one_input";
const DATA_TWO = "two_input";
const DATA_THREE = "three_input";
const DATA_FOUR = "four_input";
const DATA_FIVE = "five_input";
const DATA_SIX = "six_input";
const DATA_SEVEN = "seven_input";
const DATA_EIGHT = "eight_input";
const DATA_NINE = "nine_input";
const DATA_ZERO = "zero_input";
const DATA_AC = "AC";
const DATA_BRACKET = "bracket";
const DATA_REMAINDER = "remainder";
const DATA_DIVISION = "division";
const DATA_MUlTIPLY = "multiply";
const DATA_SUBTRACT = "subtract";
const DATA_ADD = "add";
const DATA_DOT = "dot";
const DATA_BACKSPACE = "backspace";
const DATA_EQUAL = "equal";




let FullOutputValue = "";




let input = document.querySelectorAll('.input-button');
const outputScreen = document.getElementById('output-id');

console.table(input);
input.forEach((inp) => inp.addEventListener('click', function () {
    console.log("sup");
    let inpDataset = inp.dataset.input;
    // temp.toString();
    findsUserInputAndDisplaysIt(inpDataset);
})
)



function findsUserInputAndDisplaysIt(textContent) {
    // console.log(textContent.typeOf);
    // let temp2 = `"${textContent}"`;

    console.log(textContent.typeOf);
    // if(textContent == 1){
    //     outputScreen.textContent = 11;
    // }


    function AppendsInputFromUser(input) {
        if(input == ".")
        {
            
            outputScreen.style.width = outputScreen.value.length + "ch";
            outputScreen.style.direction = "ltr";
            FullOutputValue = FullOutputValue + ".";
            outputScreen.value = FullOutputValue;
        }
        else{
        outputScreen.style.direction = "rtl";
        outputScreen.style.width ="19rem"
        FullOutputValue = FullOutputValue + input;
        outputScreen.value = FullOutputValue;
        }
    }
    switch (textContent) {
        case DATA_ZERO:
            AppendsInputFromUser(0);
            break;
        case DATA_ONE:
            console.log("you ar e in");
            AppendsInputFromUser(1);
            break;

        case DATA_TWO:
            AppendsInputFromUser(2);
            break;
        case DATA_THREE:
            AppendsInputFromUser(3);
            break;


        case DATA_FOUR:
            AppendsInputFromUser(4);
            break;

        case DATA_FIVE:
            AppendsInputFromUser(5);
            break;

        case DATA_SIX:
            AppendsInputFromUser(6);
            break;

        case DATA_SEVEN:
            AppendsInputFromUser(7);
            break;

        case DATA_EIGHT:
            AppendsInputFromUser(8);
            break;

        case DATA_NINE:
            AppendsInputFromUser(9);
            break;

        case DATA_DOT:
            let dot = '.';
            // dot.style.direction = 'rtl';
            if(FullOutputValue.includes(".")) return;
            AppendsInputFromUser(".");
        default:
            return;

    }
}


