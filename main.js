// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hiddenMessage = document.getElementById("modal");

const likeGlyphs = document.querySelectorAll(".like-glyph");

// document.getElementById("modal").classList.add(".hidden");


function clickEmpyHeart(e){
  const heart = e.target;
  mimicServerCall()
    .then(function(likedPost){
      if (heart.innerText == EMPTY_HEART){
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else (heart.innerText = EMPTY_HEART)
    })

    .catch(function(error){
      hiddenMessage.classList.remove("hidden")
      setTimeout(() => {hiddenMessage.classList.add("hidden")}, 3000);
    })
  // mimicServerCall()
  //   .then(function(likedPost){
  //     if (heart.innerText == EMPTY_HEART){
  //       heart.innerText = FULL_HEART;
  //     }
  //   })
      

    // })
    // .catch(function(error){
    //   hiddenMessage.classList.remove("hidden")
    //   setTimeout(() => {hiddenMessage.classList.add("hidden")}, 3000);
    // })


  // }
}

  for (const glyph of likeGlyphs) {
    glyph.addEventListener("click", clickEmpyHeart);
  }
  









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
