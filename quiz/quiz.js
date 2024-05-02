// TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    let statement= document.querySelector("#statement");
    // optionButtons should be all the elements within the "options" div
    let optionButtons= document.querySelectorAll("button");
    // explanation should be the "explanation" div
    let explanation = document.querySelector("#explanation");


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 

    let fact=explanation={
        statement:"JavaScript was invented in 1995",
        answer:true,
        explanation:"Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days."
    };
    

    
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent=fact.statement
        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    let disable=(button)=>{
        button.setAttribute("disabled","");
    }
    // enable(button) should remove the attribute "disabled" from the button element
    let enable=(button)=>{
        button.removeAttribute("disabled");
    }

    disable(optionButtons);


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guess){
        return guess===fact.answer;
    }

    


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
            // TODO 6: Within the event handler function, display the fact's explanation by setting the text of the explanation element


            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons


            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate

    