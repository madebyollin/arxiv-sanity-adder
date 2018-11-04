let button = document.createElement("div");
button.textContent = "add to arXiv sanity";
button.style = `
font-family: Times;
font-variant: small-caps;
padding: 8px 24px;
background: #202020;
color: white;
border-radius: 32px;
font-size: 1.0rem;
position: fixed;
left: 0;
bottom: 0;
margin: 16px;
transition: 0.2s ease opacity;
cursor: pointer;
`;
document.body.appendChild(button);
button.onclick = () => {
    // grab the pdf id
    const pid = /\/([0-9\.a-z]+)\.pdf/.exec(window.location.href)[1];
    fetch("http://www.arxiv-sanity.com/libtoggle", {
          method: "POST",
          body: `pid=${encodeURIComponent(pid)}`,
          headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(console.log);
}

var last_mouse_move = null;
var displaying = true;
function showButton() {
   button.style.opacity = 1; 
}
function hideButton() {
    button.style.opacity = 0;
}

// god damn
document.body.style.minHeight = "100%";
document.body.addEventListener("mousemove", () => {
    last_mouse_move = new Date();
    if (!displaying) {
        showButton();
        displaying = true;
    }
});
// lol bad code
window.setInterval(() => {
    let now = new Date();
    if (!last_mouse_move || (now.getTime() - last_mouse_move.getTime()) > 2 * 1000) {
        hideButton();
        displaying = false;
    }
}, 500);
