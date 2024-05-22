// adding an eventListener on button
document.getElementById('summarizeButton')
.addEventListener('click', async() => 
// executiing this following code as sooon as the 
// button is clicked
{ const inputText=document.getElementById('inputText').value;

//console.log(inputText+"hi i am inputtext")

// summaarixiing the inputTxt
const summary="summary"

// assigning the summarized value to outputTextArea
document.getElementById('outputText').value=summary

})
