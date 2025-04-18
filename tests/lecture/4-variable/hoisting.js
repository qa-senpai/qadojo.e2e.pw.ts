// hoisting
buzz()
console.log(somevariable);

var somevariable = "asfafsa";
var somevariable = "asfafsaafwsasf";

function buzz(){
    console.log(somevariable);
}

console.log(somevariable);

let someLetVariable = 12415;
someLetVariable = 1215125151;
someLetVariable = true;

console.log(someLetVariable);

const someConstVariable = 'safasfas';
console.log(someConstVariable);

// область видимості 

// глобальна 

if(true){
    // блочна
    let someBlockVariable = 'asfaafas';
    console.log(someAnotherBlock);

        if(true){
            //блочна
            var someAnotherBlock = 'asfasfasf11a'
            console.log(someBlockVariable);
        }
}

function fizz(){
    // функціональна
    let someFuncVariable = 'some vars';
    console.log(someFuncVariable);
     
    function buzz(){
        someFuncVariable
    }

    buzz();
}




fizz();
// console.log(someFuncVariable);
// console.log(someBlockVariable);


// глобальна 
// блочна
// функціональна 
// лексична




