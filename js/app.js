//selecting the "credit card" element and calling focus to it//
$( "#cc-num" ).focus();

function isCCNumValid() {
  let ccNum = $("#cc-num").val(); 
  let ccRegex = /^[0\d][0-9]{12,15}$/

  if (ccRegex.test(ccNum) === false) {
    console.log('Regex test failed')
    $('#cc-num').css('border-color', '#ff0000');
    $('#error').text('Please enter your credit card information.');
    return false; 
  } else {
    $('#cc-num').css('border-color', '#00ff0c');
    $('#cc-num').removeClass('error');
    $('#error').hide();
    return true; 
  }
};

$('#cc-num').on('focusout', function() {
  isCCNumValid(); 
}); 
 
$('#my-form').submit(function(event) {
  console.log(isCCNumValid())
  const valid = isCCNumValid();
  if (valid===false) {
    event.preventDefault();
    console.log('Not submitted!')
    isCCNumValid(); 
  } else {
    alert('Form submitted')
    // var img = document.createElement("img");//creating the image varible//
    // img.src = "public/fireworks_photo.png";//adding image src//
    // var src = document.getElementById("fireworks_photo");//getting image from the DOM by ID//
    // src.appendChild(img);//appending image to the DOM//
  }
});


  
    
    
    






 
