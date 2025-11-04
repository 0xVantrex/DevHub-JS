# 🚀 DevHub JS — Pure JavaScript Collaboration Project

### 🧠 Overview
**DevHub JS** is a collaborative JavaScript learning project designed to help developers sharpen their skills in DOM manipulation, data handling, and API integration — all in **pure vanilla JavaScript**.

This app functions as a **Developer Profile Manager**, allowing users to create, edit, and manage developer profiles directly in the browser.  
No frameworks. No backend. 100% JavaScript logic.

---

## 🎯 Project Goals
- Strengthen core JavaScript logic (functions, arrays, objects, loops, DOM, events).
- Learn how to collaborate using GitHub (branches, pull requests, merges).
- Build a real-world app interface with live interactivity.
- Practice modular JavaScript structure with independent feature files.

---

## ⚙️ Core Features

| Feature | Description | Key JS Concepts |
|----------|--------------|-----------------|
| 🧩 **Add / Edit / Delete Profiles** | Create, modify, or remove user profiles dynamically. | DOM creation, event handling, array operations |
| 💾 **Persistent Storage** | Save all data in `localStorage` and auto-load it on refresh. | JSON stringify/parse, localStorage API |
| 🔍 **Search & Filter** | Search profiles instantly by name or skill. | String methods, filter(), includes() |
| 🌗 **Dark Mode Toggle** | Toggle dark/light themes with a click. | classList, state persistence |
| 📊 **Stats Dashboard** | Show total profiles, skill distribution, etc. | map(), reduce(), loops |
| 🧠 **GitHub API Integration** | Fetch live GitHub repos by username. | fetch(), async/await, promises |

---

## 🗂 Folder Structure

devhub-js/
│
├── index.html # Base HTML layout (minimal)
├── style.css # Optional basic styling
├── js/
│ ├── app.js # Main controller / initialization
│ ├── profiles.js # Add/Edit/Delete logic
│ ├── storage.js # localStorage handling
│ ├── search.js # Search and filtering
│ ├── stats.js # Stats generation and rendering
│ ├── theme.js # Dark mode toggle logic
│ └── github.js # GitHub API feature
├── assets/
└── README.md


---

## 👥 Team Collaboration Setup

### Step 1: Repo Setup
- Repo owned by **Vantrex (admin)**  
- All members added as collaborators.  
- Each member clones the repo locally.  

### Step 2: Branch Workflow
Each member creates their **own feature branch** like:
feature/add-profile
feature/search-filter
feature/dark-mode

yaml
Copy code

Workflow:
1. `git pull origin main` → get latest code  
2. Code your feature  
3. `git add . && git commit -m "Add search filter logic"`  
4. `git push origin feature/search-filter`  
5. Create a Pull Request to `main` branch  
6. Review and merge after testing  

---

## 👨‍💻 Member Responsibilities

| Member | Task | File | Focused Concepts |
|--------|------|------|------------------|
| 1 | Setup JS data structure | `app.js` | Arrays, objects |
| 2 | Add Profile logic | `profiles.js` | Form handling, DOM updates |
| 3 | Edit/Delete logic | `profiles.js` | Array manipulation |
| 4 | Search/Filter | `search.js` | String/array methods |
| 5 | LocalStorage integration | `storage.js` | JSON, browser storage |
| 6 | Dark Mode toggle | `theme.js` | Class manipulation, state |
| 7 | Stats Dashboard | `stats.js` | map(), reduce(), DOM updates |
| 8 | GitHub API | `github.js` | Fetch API, async/await |

---

## 🕒 Weekly Time Plan (7 Hours/Week)

| Day | Activity | Hours |
|-----|-----------|-------|
| Monday | Kickoff meeting, assign JS tasks | 1 |
| Tue–Thu | Code your feature locally | 4 |
| Saturday | Pull Requests + peer review + test | 2 |

---

## 🧱 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/0xvantrex/DevHub-js.git
Open index.html in your browser.

Test your JS feature.

Commit and push when ready.

🧰 Tools Needed
Visual Studio Code

Git & GitHub account

Browser 

Basic understanding of HTML/CSS/JS

💡 Future Ideas
Convert to ES6 modules

Add profile image upload

Integrate Firebase or Node backend later

Add charts for skill distribution

👑 Project Lead
0xVantrex
Software Developer • Cybersecurity Practitioner • 

⚡ “Code clean, commit often, and push with purpose.”
