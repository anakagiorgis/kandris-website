# Gym Teacher Website (Simple)

This is a minimal static website intended for a gym teacher to show a short biography and selected YouTube videos from their channel.

Files
- `index.html` — Main page (contains the biography element and anchor for video grid).
- `css/styles.css` — Styles and responsive layout.
- `js/script.js` — Small script that reads `VIDEO_IDS` and injects YouTube iframes.

Quick start

1. Edit the biography directly in `index.html` inside the element with id `bio`.
2. Open `js/script.js` and replace the `VIDEO_IDS` array with real YouTube video IDs from the teacher's channel. Example:

```js
const VIDEO_IDS = ['M7lc1UVf-VE', 'dQw4w9WgXcQ'];
```

Channel provided by you: `https://www.youtube.com/@djkgr` — if you want, I can fetch the latest uploads automatically using the YouTube Data API (I will provide a small Node.js helper or instructions; an API key is required).

Videos added to the scaffold

- I added these three videos (from the links you pasted) to `js/script.js` so they will show on the page:
	- `https://youtu.be/utj600_A2yk` (id: `utj600_A2yk`)
	- `https://youtu.be/CQ6DfRCOX8M` (id: `CQ6DfRCOX8M`)
	- `https://youtu.be/74ArP-_ieI8` (id: `74ArP-_ieI8`)

To change the videos later, edit the `VIDEO_IDS` array in `js/script.js` and provide new YouTube IDs.

3. Serve the folder locally. With PowerShell and Python available, run:

```pwsh
# from the project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Alternative: `npx serve` or any static file server.

Notes and next steps
- To automatically list the latest uploads from a channel, we can add a small backend or use the YouTube Data API (requires an API key). Ask me if you want that.
- You can deploy this as a GitHub Pages site by pushing the repo and enabling Pages in the repository settings.

Adding a profile photo

- Option A (static file): place your image file in `images/profile.jpg` (create an `images` folder next to `index.html`). The page will use that file automatically.
- Option B (quick preview/upload): use the "Change photo" control in the header. It previews the image immediately and stores it in your browser's `localStorage` so it persists in that browser. This does not upload the file to a server.

If you want me to add server-side image upload support (so the photo is hosted with the site), tell me whether you're happy hosting on GitHub Pages (I can add instructions) or you want a small Node.js backend to accept an upload.
