function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('arxiv_sanity.js'), 'body');
window.addEventListener("message", function(message) {
    if (message.source != window) {
        return;
    }
    chrome.runtime.sendMessage({
        message: "add_id",
        data: message.data
    });
});
