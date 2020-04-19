//Global constants
const prefix1 = "https://www.youtube.com/watch?"; // standard
const prefix2 = "https://youtu.be/"; // after clicking share
const videoIdLength = 11;

// https://www.youtube.com/watch?v=QxHkLdQy5f0 // standard
// https://youtu.be/QxHkLdQy5f0 // after clicking share
// https://www.youtube.com/watch?time_continue=148&v=_mkiGMtbrPM&feature=emb_logo // after clicking the YOUTUBE button on a Youtube embed

// to deal with prefix 3 we should perhaps split by "&"

// Turns the extension off and on
function toggleState() {
  var state = document.getElementById("state");
  if (state.innerText === "OFF") {
    state.innerText = "ON";
  } else {
    state.innerText = "OFF";
  }
}

function printT() {
  //const correct = "_mkiGMtbrPM";
  const dummy =
    "https://www.youtube.com/watch?time_continue=148&v=_mkiGMtbrPM&feature=emb_logo";

  // Regex method

  // Find the first set of 11 characters that abide by the following rules:
  // 1. There is an '=' before it.
  // 2. There is an '&' after it.
  const actuallyGoodRx = /(?<==).{11}(?=&)/;
  console.log(dummy.match(actuallyGoodRx)[0]); // Index used as match() returns an array

  // split method
  // const split = dummy.split("&v=");
  // console.log(split[1].slice(0, videoIdLength));
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
    getUniqueId(url);
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
  const version = "v=";
  const standard = prefix1 + version; // standard youtube link prefix

  // Extract Id from prefix2 (Easy)
  if (url.slice(0, prefix2.length) === prefix2) {
    console.log(url.slice(prefix2.length, prefix2.length + videoIdLength));

    // Extract from prefix1 (Harder): https://www.youtube.com/watch?v=Gu77Vtja30c
  } else if (url.slice(0, prefix1.length) === prefix1) {
    // Standard version
    if (url.slice(0, standard.length) === standard) {
      console.log(url.slice(standard.length, standard.length + videoIdLength));

      // Embed version (use regex?)
    } else {
      // Find the first set of 11 characters that abide by the following rules:
      // 1. There is an '=' before it.
      // 2. There is an '&' after it.
      const regex = /(?<==).{11}(?=&)/;
      console.log(url.match(regex)[0]); // Index used as match() returns an array
    }
  }

  // Extract for type 3: https://www.youtube.com/watch?v=FMrqlo_L-gY&feature=emb_rel_pause
}

/*
EMBED CODE

<iframe width="480" height="360" 
src="https://www.youtube.com/embed/_mkiGMtbrPM" 
frameborder="0" allow="accelerometer; 
autoplay;
encrypted-media;
gyroscope;
picture-in-picture" 
allowfullscreen>
</iframe>
*/

/* REGEX FOR TOMORROW (?<=https:\/\/youtu\.be\/).{11} 
(?<=v=).{11}*/
