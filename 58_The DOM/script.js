/*1. Assigns the div with the id "ny" to the variable div
2. Makes a collection of all the <p>s in the div and assigns the collection to the variable p
3. "Reads" the text contained in the 2nd paragraph of the div and assigns it to the variable
contents
 */


var d=document.getElementById('div1');
var par=d.getElementsByTagName("p");
var contents=par[2].innerHTML;


/*Now I'll show you a new way to target the paragraph, by using the DOM organization
chart.*/
console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[2].innerHTML);