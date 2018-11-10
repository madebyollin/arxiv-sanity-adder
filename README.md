Adds a button to save arXiv PDFs in your arXiv-sanity library, because I kept clicking links on Twitter and forgetting to save the papers.

![](screenshot.png)

(Written while waiting for class; pull requests / forks are encouraged)

---

### Installation

Follow steps [1, 2, and 3 here](https://developer.chrome.com/extensions/getstarted#manifest). There's probably a way to put this on the Chrome extension store.

### TODO

- [ ] Testing
- [ ] Error handling (e.g. if you're not logged in) and / or some indication when the request was successful
- [ ] Fix toggling behavior: the button just sends a blind request to `libtoggle`; if the paper is already in your library, it will remove it! This shouldn't happen
- [ ] The button should show whether the paper is *already* in your library
- [ ] Cleanup of the button injection code (capturing mouse events in the PDF viewer to hide/show the button is non-trivial, and the current "fix" is a hack)
- [ ] Add an icon and stuff