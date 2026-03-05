# 🚀 JS-Projects — Collaborative JavaScript Playground

> A shared space where we build, learn, and grow together — one project at a time.

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](https://github.com/wasiif/JS-Projects/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 📖 What Is This Repo?

**JS-Projects** is a collaborative monorepo where a group of developers come together to build JavaScript/Node.js projects, sharpen their skills, and learn from each other. Every project lives in its own dedicated folder inside this repo.

Whether you're building a CLI tool, a web scraper, a REST API, a game, or any creative idea — **there's a folder here waiting for you.**

---

## 📁 Repo Structure

```
JS-Projects/
│
├── cli_utility_toolKit/       ✅  CLI Toolkit (by @wasiif)
│   ├── index.js
│   ├── package.json
│   └── README.md
│
├── your-project-name/          ← Your next project goes here!
│   ├── index.js
│   ├── package.json
│   └── README.md
│
├── package.json                ← Root package (shared dependencies)
└── README.md                   ← You are here
```

> 📌 **Rule #1:** Every project gets **its own folder**. Never drop files in the root of the repo.

---

## 🛠️ Projects

| # | Project | Description | Author | Status |
|---|---------|-------------|--------|--------|
| 1 | [`cli_utility_toolKit`](./cli_utility_toolKit) | A collection of useful CLI utilities built with Node.js | @wasiif | 🟢 Active |
| — | *Your Project* | *Add yours!* | — | — |

---

## 🤝 How to Collaborate

### 1. Clone the Repo

```bash
git clone https://github.com/wasiif/JS-Projects.git
cd JS-Projects
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Create Your Project Folder

```bash
mkdir my-awesome-project
cd my-awesome-project
npm init -y
```

> Name your folder in **kebab-case**: `todo-cli`, `weather-app`, `quiz-game` ✅  
> Not like: `MyProject`, `myproject`, `my project` ❌

### 4. Add a README to Your Project

Every project folder **must** have its own `README.md` that explains:
- What the project does
- How to install and run it
- Any dependencies it needs

---

## 🌿 Branching Strategy

We follow a simple **feature branch workflow**:

```
main          ← stable, production-ready code only
└── feature/your-name-project-name    ← your work-in-progress
```

### Creating Your Branch

```bash
# Always branch off from the latest main
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/wasiif-cli-toolkit
```

### Branch Naming Rules

| Type | Pattern | Example |
|------|---------|---------|
| New project | `feature/name-project` | `feature/ali-weather-app` |
| Bug fix | `fix/name-issue` | `fix/sara-login-bug` |
| Improvement | `improve/name-what` | `improve/wasiif-cli-colors` |

---

## 💾 Committing Changes

Write **clear, meaningful commit messages**. We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat(cli-toolkit): add file renaming command"
```

### Commit Message Format

```
type(scope): short description
```

| Type | When to use |
|------|-------------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Updating documentation |
| `refactor` | Code cleanup (no functionality change) |
| `chore` | Config, tooling, misc updates |
| `style` | Formatting, spacing (not CSS) |

> ✅ `feat(weather-app): add 5-day forecast support`  
> ❌ `updated stuff` / `fix` / `changes`

---

## 📤 Pushing & Pull Requests

### Push Your Branch

```bash
git push origin feature/your-branch-name
```

### Open a Pull Request (PR)

1. Go to [github.com/wasiif/JS-Projects](https://github.com/wasiif/JS-Projects)
2. Click **"Compare & pull request"**
3. Fill in the PR template:
   - **Title:** What does this PR add/fix?
   - **Description:** Brief explanation of your work
   - **Screenshots** (if applicable)
4. Request a review from at least **one teammate**
5. Wait for approval before merging ✅

### PR Rules

- ❌ Never merge your own PR without a review
- ❌ Never push directly to `main`
- ✅ Keep PRs small and focused — one feature/fix per PR
- ✅ Delete your branch after merging

---

## 🔄 Keeping Your Branch Up to Date

Before pushing, always sync with `main` to avoid conflicts:

```bash
# While on your feature branch
git fetch origin
git rebase origin/main

# Or using merge (simpler for beginners)
git pull origin main
```

If there are merge conflicts, resolve them file by file, then:

```bash
git add .
git rebase --continue   # if using rebase
# OR
git commit              # if using merge
```

---

## 🚫 What NOT to Do

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Push `node_modules/` | Add it to `.gitignore` |
| Push `.env` files | Add it to `.gitignore`, share a `.env.example` |
| Push directly to `main` | Always use a feature branch |
| Write vague commit messages | Be descriptive and use the convention |
| Edit someone else's project folder | Open an issue and discuss first |
| Leave broken code in a PR | Test locally before opening a PR |

---

## 🔐 `.gitignore` Reminder

Make sure your project folder has (or inherits) these ignores:

```gitignore
node_modules/
.env
.DS_Store
dist/
*.log
```

---

## 💡 Project Ideas to Get Started

Looking for inspiration? Here are some ideas:

- 🔧 **CLI Tools** — file organizer, password generator, todo app
- 🌐 **Mini APIs** — Express REST API, JSON server
- 🎮 **Terminal Games** — number guesser, hangman, quiz
- 📦 **Automation Scripts** — rename files, scrape data, send emails
- 🧠 **Algorithms** — sorting visualizer, pathfinding, data structures

---

## 📋 Collaboration Rules (TL;DR)

```
1. One folder per project
2. Always branch from main
3. Use conventional commit messages
4. PR must be reviewed before merge
5. Never push node_modules or .env
6. Add a README to your project folder
7. Be kind, review others' PRs, and give feedback
```

---

## 🧑‍💻 Contributors

| Name | GitHub | Project |
|------|--------|---------|
| Wasiif | [@wasiif](https://github.com/wasiif) | cli_utility_toolKit |
| *You?* | — | *Coming soon* |

---

## 📬 Getting Help

Stuck on something? Here's how to get help:

- 💬 **Open a GitHub Issue** — describe your problem clearly
- 🔀 **Leave a comment on a PR** — ask questions inline
- 📣 **Reach out to the team** — use your shared group chat

---

<div align="center">

**Built with 💛 by the JS-Projects Team**

*Keep shipping. Keep learning. Keep collaborating.*

</div>
