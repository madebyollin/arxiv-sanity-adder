chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.message == "toggle_id") {
        fetch("https://another-arxiv-sanity.site/libtoggle", {
            method: "POST",
            //mode: "no-cors",
            body: `pid=${encodeURIComponent(message.data.data)}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            console.log("my site gave response", response);
            response.text().then(responseText => {
                console.log("my site says", responseText);
                sendResponse(responseText);
            }, error => sendResponse("response.text error"));
        }, error => sendResponse("error"));
        // karpathy as backup
        fetch("http://www.arxiv-sanity.com/libtoggle", {
            method: "POST",
            body: `pid=${encodeURIComponent(message.data.data)}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            response.text().then(responseText => {
                console.log("karpathy's site says", responseText);
                // unpossible thats, me have timing bug
                // sendResponse(responseText);
            }, error => sendResponse("response.text error"));
        }, error => sendResponse("error"));
    }
    return true;
});
