
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


function copyEmailToClipboard(){

  navigator.clipboard.writeText("felipe.lee30@gmail.com");

}

// function scrollToHome(){

//   document.getElementById('asdf').scrollIntoView({
//     behavior: "smooth",
//   });

// }