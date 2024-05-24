// adding an eventListener on button
document.getElementById('summarizeButton')
.addEventListener('click', async() => 
// executiing this following code as sooon as the 
// button is clicked
{ const inputText=document.getElementById('inputText').value;

//console.log(inputText+"hi i am inputtext")
if(inputText){
    console.log('Input Text is' , inputText);

// summaarixiing the inputTxt using HUGGING FACE
const summary=await summarizeText(inputText);

// assigning the summarized value to outputTextArea
document.getElementById('outputText').value=summary;
}

// if no inputText is passed
else{
    alert('please paste the text here');
}
});



async function summarizeText(text) {

    const apiUrl='https://api-inference.huggingface.co/models/facebook/bart-large-cnn'; // end point of api
    const apiKey='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'; // got this from huggingface

    const response=await fetch(apiUrl, {
   
        method: 'POST' ,
        headers:{
         'Authorization': `Bearer ${apiKey}`,
         'Content-Type':'application/json'
        } , 
        body: JSON.stringify({
            inputs: text
          })
    });


    if(!response.ok){
      throw new Error('Error summarizing Text');

    }

 console.log('Logging response',  response);

 const data=await response.json();

 console.log('Logging data', data);
 return data[0].summary_text;
}

