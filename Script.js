//Global constants
const prefix1 = "https://www.youtube.com/watch?"; // standard
const prefix2 = "https://youtu.be/"; // after clicking share
const videoIdLength = 11;
// 480p dimensions
const WIDTH = 720;
const HEIGHT = 480;
// https://www.youtube.com/watch?v=QxHkLdQy5f0 // standard
// https://youtu.be/QxHkLdQy5f0 // after clicking share
// https://www.youtube.com/watch?time_continue=148&v=_mkiGMtbrPM&feature=emb_logo // after clicking the YOUTUBE button on a Youtube embed

// to deal with prefix 3 we should perhaps split by "&"

// Turns the extension off and on
function toggleState() {
  var state = document.getElementById("state");
  if (state.innerText === "OFF") {
    const videoDiv = document.getElementById("video");
    videoDiv.style.display = "block";
    state.innerText = "ON";
  } else {
    const videoDiv = document.getElementById("video");
    videoDiv.innerHTML = "The video will appear here!";
    videoDiv.style.display = "none";
    state.innerText = "OFF";
  }
}

// Main: actually re-parses the Youtube embed HTML
function replaceVideo() {
  //Get the URL from the link Id
  const entryField = document.getElementById("link");
  const url = entryField.value;
  // entryField.value = ""; // Can do this after a set amount of delay like 3 or 4 seconds (REMEMBER TO UNCOMMENT)

  if (url) {
    const linkIsValid = checkLink(url);
    if (linkIsValid === true) {
      const id = getUniqueId(url);
      reparseEmbed(id);
    } else {
      const videoDiv = document.getElementById("video");
      videoDiv.innerHTML = "This isn't a Youtube video";
    }
  }
}

// Helper: checks if the Youtube URL is of Youtube
function checkLink(url) {
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

  if (url.slice(0, prefix2.length) === prefix2) {
    const regexPatternShare = /(?<=\.be\/).{11}/; // grab the first 11 chars after be/
    return url.match(regexPatternShare)[0];
    //console.log(url.match(regexPatternShare)[0]);
  } else if (url.slice(0, prefix1.length) === prefix1) {
    // Standard version
    if (url.slice(0, standard.length) === standard) {
      const regexPatternStandard = /(?<=v=).{11}/; // grab the first 11 chars after v=
      return url.match(regexPatternStandard)[0];
      // Embed version
    } else {
      // Find the first 11 chars that abide by the following rules:
      // 1. There is an '=' before it.
      // 2. There is an '&' after it.
      const regexPatternEmbed = /(?<==).{11}(?=&)/;
      return url.match(regexPatternEmbed)[0];
    }
  }
}

// Helper: reconstruct the Youtube Embed
function reparseEmbed(id) {
  const videoDiv = document.getElementById("video");
  const embedPrefix = "https://www.youtube.com/embed/";
  const targetVideo = embedPrefix + id;

  const youtubeEmbed = document.createElement("IFRAME");
  youtubeEmbed.style.width = WIDTH;
  youtubeEmbed.style.height = HEIGHT + 1220;
  youtubeEmbed.src = targetVideo;
  youtubeEmbed.frameborder = "0";
  youtubeEmbed.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  youtubeEmbed.setAttribute("allowFullScreen", "");
  videoDiv.innerHTML = "";
  videoDiv.appendChild(youtubeEmbed);
}
