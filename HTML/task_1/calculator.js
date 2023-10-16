let currentInput='';
let currentExpression='';
let resultDisplayed=false;

function displayResult(){
    document.getElementById('input').value=resultDisplayed?currentInput:currentExpression+currentInput;
}

function allClear(){
    currentInput='';
    currentExpression='';
    resultDisplayed=false;
    displayResult();
}

function addNumberToInput(num){
    if(resultDisplayed){
        currentExpression='';
        currentInput=num;
        resultDisplayed=false;
    }
    else{
        currentInput+=num;
    }
    displayResult();
}

function addOperatorToInput(operator){
    if(resultDisplayed){
        resultDisplayed=false;
        currentInput='';
    }
    currentExpression+=currentInput+operator;
    currentInput='';
    displayResult();
}

function finalResult(){
    if(currentInput===''){
        return;
    }
    currentExpression+=currentInput;
    const result=eval(currentExpression);
    currentInput=result.toString();
    currentExpression='';
    resultDisplayed=true;
    displayResult();
}