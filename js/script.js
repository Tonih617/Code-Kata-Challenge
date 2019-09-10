function checkMatchingStrings(stringOne, stringTwo) {
  if (stringOne.localeCompare(stringTwo) === 0) {
    $('.answer').text("Congratulations its a match!")
    var img = document.createElement("img");
    img.src = "public/Sunny-day-photo.png";
    var src = document.getElementById("Sunny-Photo");
    img.className ="w3-spin";
    src.appendChild(img);
  } else {
    $('.answer').text("Sorry, it's not a match please try again!")
  }
}

$('form').submit(function(event) {
  event.preventDefault();
  let phraseOne = $('#phrase-one').val().toLowerCase();
  let phraseTwo = $('#phrase-two').val().toLowerCase();

  checkMatchingStrings(phraseOne, phraseTwo)
});

// $('#clear-button').click(function(event) {
//   $('input[name="phrase-one"]').val("");
//   $('input[name="phrase-two"]').val("");
//   $('.answer').text("");
// });  
