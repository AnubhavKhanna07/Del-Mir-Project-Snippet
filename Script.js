/* Old code
// 15/04/2020

//Author: Mirlington
//Wipes facebook's distracting content off the screen.
function wipeContent() {
    const fbHeight = window.screen.height - 185;
    
    const EMBED_URL = '<p style="text-align: center;"><iframe width="480" height="360" src="https://www.youtube.com/embed/_mkiGMtbrPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>';
    
    const content = document.getElementById('content');
    content.style.height = fbHeight.toString()+"px";
    content.style.width = "inherit";
    content.innerHTML = EMBED_URL;
    content.appendChild(iframe);
    return null;
}

wipeContent()

// 480p = 480x720
// 360p = 480x360
*/

// Turns the extension off and on
function toggleState() {
  var state = document.getElementById("state");
  if (state.innerText === "OFF") {
    state.innerText = "ON";
  } else {
    state.innerText = "OFF";
  }
}

function print() {
  console.log("Hello, World");
}

// Main: actually re-parses the Youtube embed HTML
function replaceVideo() {
  //Get the URL from the link Id
  // goto checkLink
  // goto getUniqueId
}


// Helper: checks if the Youtube URL is of Youtube
function checkLink(URL) {
  const type1 = "https://www.youtube.com/watch?v=";
  const type2 = "https://youtu.be/"

  // Check for type 1: https://www.youtube.com/watch?v=Gu77Vtja30c
    // check that the initial substring
  // Check for type 2: https://youtu.be/Gu77Vtja30c
  // Check for type 3: https://www.youtube.com/watch?v=FMrqlo_L-gY&feature=emb_rel_pause
}

// Helper gets the last unique string of a Youtube URL
function getUniqueId(url) {}
