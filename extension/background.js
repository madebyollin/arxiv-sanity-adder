chrome.runtime.onMessage.addListener(function(message, callback) {
    if (message.message == "add_id") {
        fetch("http://www.arxiv-sanity.com/libtoggle", {
            method: "POST",
            body: `pid=${encodeURIComponent(message.data.data)}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            mode: "no-cors"
        });
    }
});
