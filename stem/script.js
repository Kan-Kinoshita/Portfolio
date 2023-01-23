/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to do to make it suitable for your STEM problem.

 The getInput function will take user input from the textbox with id="input1" on the page. 
 It will run when the user clicks on the GO button.
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the span element that has id="output1" on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function getInput() {
  let inputField1 = document.querySelector("#input1");
  let input1 = inputField1.value;
  let inputField2 = document.querySelector("#input2");
  let input2 = inputField2.value;
  let inputField3 = document.querySelector("#input3");
  let input3 = inputField3.value;

  let result = 0;
  
  if(input1 == "") {
    result = "Mass = " + input2 * input3;
  }
  if(input3 == "") {
    result = "Mole = " + input1 / input2;
  }
  if(input2 == "") {
    result = "Molcular mass = " + input1 / input3;
  }
  
  

  // do something with the input
  writeOutput(result); // <-- replace this with YOUR CODE
}


// This function will write some text to the output span on the page.
function writeOutput(text) {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = text;
}


document.querySelector("#buttonGo").addEventListener("click", getInput);