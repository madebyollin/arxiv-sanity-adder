chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // setTimeout(sendResponse({"AAAAH???"), 10000);
    if (message.message == "toggle_id") {
        fetch("http://www.arxiv-sanity.com/libtoggle", {
            method: "POST",
            body: `pid=${encodeURIComponent(message.data.data)}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            response.text().then(responseText => {
                console.log("karpathy's site says", responseText);
                sendResponse(responseText);
            }, error => sendResponse("response.text error"));
        }, error => sendResponse("error"));
        // also do it on my site haha, but who cares about the result
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
            }, error => sendResponse("response.text error"));
        }, error => sendResponse("error"));
    }
    return true;
});
