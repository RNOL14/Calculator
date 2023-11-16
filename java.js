let result='';
function updateCalculation(value){
    result+=value;
    displayValue();
}

function theValue(){
    result=eval(result);
    displayValue();
}

function removeValues(){
    result='';
    displayValue();

}

function displayValue(){
    if(result===''){
        document.querySelector('.display').innerHTML=0;
    }
    else{
        document.querySelector('.display').innerHTML=result;
    }
    
}
