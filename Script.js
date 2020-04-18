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

//Global constants
const prefix1 = "https://www.youtube.com/"; //standard
const prefix2 = "https://youtu.be/"; // after clicking share
//const prefix3 = "https://www.youtube.com/watch?time_continue=1"; // after clicking YOUTUBE button on an embedded video (e.g. on Discord)

// https://www.youtube.com/watch?v=QxHkLdQy5f0
// https://youtu.be/QxHkLdQy5f0
// https://www.youtube.com/watch?time_continue=148&v=_mkiGMtbrPM&feature=emb_logo

// to deal with prefix 3 we should perhaps split by "&v="

const videoIDLength = 11;

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
  const entryField = document.getElementById("link");
  const url = entryField.value;
  // entryField.value = ""; // Can do this after a set amount of delay like 3 or 4 seconds (REMEMBER TO UNCOMMENT)
  // there actually is a value
  if (url) {
    // go to checkLink
    console.log(checkLink(url));
    // go to getUniqueId
    // go to reparseEmbed (doesn't exist yet)
  }
}

// Helper: checks if the Youtube URL is of Youtube
function checkLink(url) {
  // Check for prefix1 and prefix 2
  if (
    url.slice(0, prefix1.length) === prefix1 ||
    url.slice(0, prefix2.length) === prefix2
  ) {
    return true;
  } else {
    return false;
  }
}

// Helper gets the last unique string of a Youtube URL
function getUniqueId(url) {
  // Extract for type 1: https://www.youtube.com/watch?v=Gu77Vtja30c
  // Extract for type 2: https://youtu.be/Gu77Vtja30c
  // Extractfor type 3: https://www.youtube.com/watch?v=FMrqlo_L-gY&feature=emb_rel_pause
}

