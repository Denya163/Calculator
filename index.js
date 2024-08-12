let target = document.getElementById("myCalc");
let display = document.getElementById("display");

let argOne = '';
let argTwo = '';
let operator = '';
let input = '';


document.addEventListener('click', function(event){
    if (event.target.innerHTML == '=') return false;
    display.innerHTML = input;
});

target.onclick = function(event){
    if( event.target.className == 'myNumber' && argOne.length < 10 && operator == '' && argTwo == '' ){
        if ( argOne.includes('.') == true && event.target.innerHTML == '.' ) return;
        argOne += event.target.innerHTML;
            input += event.target.innerHTML;
    } else if ( event.target.className == 'myNumber' && argTwo.length < 10 && argOne != '' && operator != '' ){
        if ( argTwo.includes('.') == true && event.target.innerHTML == '.' ) return;
        argTwo += event.target.innerHTML;
        input += event.target.innerHTML;
    } else if ( event.target.className == 'myOperator' && operator == '' && argOne != '' && argTwo == '' ){
        operator = event.target.innerHTML;
        input += event.target.innerHTML;
    } else if ( event.target.innerHTML == '=' && argOne != '' && operator != '' && argTwo != '' ){
    
        switch(operator){
            case '+':
                display.innerHTML = ( +argOne + +argTwo );
                break;
            case '-':
                display.innerHTML = ( +argOne - +argTwo );
                break;
            case '*':
                display.innerHTML = ( +argOne * +argTwo );
                break;
            case '/':
                display.innerHTML = ( +argOne / +argTwo );
                break;
        }
        
        argOne = '';
        argTwo = '';
        operator = '';
        input = '';
    }
}