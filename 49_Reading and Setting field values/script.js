
/*********READING FIELD VALUES*******************/

/*1 function checkAddress(fieldId) {
    2 if (document.getElementById(fieldId).value === "") {
    3 alert("Email address required.");
    4 }
    5 }*/




function checkAddress(email){
    var address=document.getElementById('email').value ;
    if(address === ""){
        alert('email address is required');
    }
}

// function checkAddress(email){
//     if(document.getElementById('email').value === ""){
//         alert('email address is required');
//     }
// }



/*********SETTING FIELD VALUES*******************/
// function  fillCity(){
//     var cityName;
//     var zipEntered=document.getElementById("zip").value;
//     switch(zipEntered){
//         case "60788":
//             cityName="Omaha";
//             break;
//         case "60758":
//             cityName="Chicago";
//             break;
//         case "60348":
//             cityName="Milwaukee";
            
//     }
//         document.getElementById("city").value=cityName;
//     }

function checkName(name){
    if(document.getElementById('name').value === ""){
        alert("name is required");
    }
}