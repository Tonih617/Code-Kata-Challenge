function checkMatchingStrings(stringOne, stringTwo) {//creating a function to match both strings of phrases//
  if (stringOne.localeCompare(stringTwo) === 0) {// using a local compare function to calculate and compare both strings//
    $('.answer').text("Congratulations its a match!")//adding a congratulations message to the form if phrases are a match//
    var img = document.createElement("img");//creating an image varible//
    img.src = "public/Sunny-day-photo.png";//adding the image src//
    var src = document.getElementById("Sunny-Photo");//getting image from the DOM by ID//
    img.className ="w3-spin";
    src.appendChild(img);//appending the child element of the img src to the DOM//
  } else {//else statement for if user inputs the wrong phrases//
    $('.answer').text("Sorry, it's not a match please try again!")//adding a sorry its not a match text if user inputs the wrong phrases//
    var img = document.createElement("img");//creating the image varible//
    img.src = "public/Scratching-head-emoji.png";//adding image src//
    var src = document.getElementById("Scratching-head-emoji");//getting image from the DOM by ID//
    src.appendChild(img);//appending image to the DOM//
  }
}

$('form').submit(function(event) {//creating a prevent default function on the submit button to allow the the page to submit and return a message//
  event.preventDefault();
  let phraseOne = $('#phrase-one').val().toLowerCase();//allowing the phrases to not be case sensitive for phrase one//
  let phraseTwo = $('#phrase-two').val().toLowerCase();//allowing the phrases to not be case sensitive for phrase two//

  checkMatchingStrings(phraseOne, phraseTwo)//checking to make sure both strings of phrases are a match upon submit//
});











// $('#clear-button').click(function(event) {
//   $('input[name="phrase-one"]').val("");
//   $('input[name="phrase-two"]').val("");
//   $('.answer').text("");
// });  
