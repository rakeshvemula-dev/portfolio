# 🧠 Rakesh Vemula — AI Engineer Portfolio

A production-ready personal portfolio website with a built-in AI assistant — built with vanilla HTML/CSS/JS frontend and a FastAPI backend powered by Groq LLM.

🌐 **Live:** [rakeshvemula-dev.github.io/portfolio](https://rakeshvemula-dev.github.io/portfolio)

---

## ✨ Features

- **Dark terminal aesthetic** — hacker-style UI with green/cyan accent colors
- **Animated neural network background** — live canvas animation running across the full page
- **OS window photo frame** — profile photo styled as a terminal window
- **Typing animation** — hero role types character by character on load
- **AI chat widget** — ask questions about Rakesh's skills, projects, and experience
- **Expand mode** — chat widget opens as a full modal with dark overlay
- **Active nav highlighting** — nav links highlight as you scroll through sections
- **Fully responsive** — works across desktop and mobile

---

## 🤖 AI Chat Widget

The `>_ Chat` button opens an AI assistant powered by **Groq's LLaMA 3.1** model. It answers recruiter questions about Rakesh's background, projects, skills, and availability in real time.

**Architecture:**
```
Browser (JS fetch)
      ↓
FastAPI Backend (portfolio-api)
      ↓
Groq API (LLaMA 3.1 8B Instant)
```

The API key is never exposed in the frontend — it lives securely in the backend's environment variables.

🔗 **Backend repo:** [github.com/rakeshvemula-dev/portfolio-api](https://github.com/rakeshvemula-dev/portfolio-api)

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Background animation | Canvas API |
| Icons | Font Awesome 6 |
| Fonts | JetBrains Mono, Inter (Google Fonts) |
| AI Backend | FastAPI, Python |
| LLM | Groq API (LLaMA 3.1 8B Instant) |
| Frontend Hosting | GitHub Pages |
| Backend Hosting | Render |

---

## 📁 Project Structure

```
portfolio/
├── index.html          → full page structure
├── css/
│   └── style.css       → all styling + dark theme
├── js/
│   └── main.js         → animations + AI chat logic
├── assets/
│   └── profile.png     → profile photo
└── favicon.svg         → terminal-style rv>_ favicon
```

---

## 🚀 Run Locally

No build tools, no npm, no setup needed. Just:

1. Clone the repo:
```bash
git clone https://github.com/rakeshvemula-dev/rakeshvemula-dev.github.io.git
cd rakeshvemula-dev.github.io
```

2. Open `index.html` with **Live Server** in VS Code

3. For the AI chat to work locally, run the backend:
```bash
# Clone backend repo
git clone https://github.com/rakeshvemula-dev/portfolio-api.git
cd portfolio-api
uv venv && .venv\Scripts\activate
uv add fastapi uvicorn python-dotenv httpx
uvicorn main:app --reload --port 8000
```

4. Update the API URL in `js/main.js`:
```javascript
const response = await fetch('http://127.0.0.1:8000/chat', {
```

---

## 🔒 Security

- API key stored in backend `.env` — never in frontend code
- CORS restricted to allowed origins only
- `.env` excluded from version control via `.gitignore`

---

## 📬 Contact

**Rakesh Vemula**
- 🌐 Portfolio: [rakeshvemula-dev.github.io/portfolio](https://rakeshvemula-dev.github.io/portfolio)
- 💼 LinkedIn: [linkedin.com/in/iamrakeshvemula](https://linkedin.com/in/iamrakeshvemula)
- 🐙 GitHub: [github.com/rakeshvemula-dev](https://github.com/rakeshvemula-dev)
- 📧 Email: rakeshvemula14300@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
