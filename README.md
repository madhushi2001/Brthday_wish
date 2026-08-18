# Birthday Wishing Web App

Single-page responsive Birthday Wishing web app built with HTML/CSS/JS.

Features:
- Hero section with personalized heading and actions
- Confetti celebration (canvas-confetti)
- CSS cake with clickable candle
- Age counter (years/days)
- Responsive photo gallery referencing local images
- Flippable birthday card with a personal message

How to use:
1. Open `index.html` in a browser.
2. Replace the sample `birthdate` in `script.js` with the desired date.
3. Add your images to the `selected` folder or update paths in `script.js`.

Notes:
- This project references two local OneDrive images from the request. For the browser to display them, ensure the paths are accessible on your machine.
- You can replace styles with Tailwind easily by removing `styles.css` and adding Tailwind's CDN.

Enjoy!

Publishing
----------------
You can publish this site on GitHub Pages quickly:

1. Initialize a git repo and commit:

```bash
git init
git add .
git commit -m "Initial site"
```

2. Create a GitHub repository (via web or CLI), then push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will deploy the repository root to GitHub Pages automatically when you push to `main`.

Alternative quick deploy options:
- Netlify: drag-and-drop the site folder or connect the repo to deploy.
- Vercel: import the repo and deploy from the dashboard.

If you want, I can create a `selected/` folder and copy the two OneDrive images into the project to avoid absolute paths. Tell me if you'd like that.