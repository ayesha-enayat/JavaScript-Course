

function makeInvisible() {
    document.getElementById("ugly").className = "hidden";  //When the function is called, it assigns the "hidden" class to the element with the id "ugly."
    }
    
 function makeBig() {
    document.getElementById("ugly").className += " big";//It's += instead of just =.
        //A space before the class name is required.
     }