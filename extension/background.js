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
                sendResponse(responseText);
            }, error => sendResponse("response.text error"));
        }, error => sendResponse("error"));
    }
    return true;
});
