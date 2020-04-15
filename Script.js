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
