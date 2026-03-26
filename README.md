# HERO.IO — App Discovery Platform
 
> Explore, install, and manage your favourite apps — all in one place.
 
---
 
## 📖 Description
 
**HERO.IO** is a modern app discovery and management platform where users can browse trending applications, view detailed app information, install apps to their personal dashboard, and manage their installed apps — all from a clean, responsive interface.
 
### Key Features
 
- 🔍 **Live Search** — Filter apps by title in real time, case-insensitive
- 📦 **App Details** — View downloads, average ratings, total reviews, size, and a ratings breakdown chart
- ⚡ **Install / Uninstall** — One-click install with toggle state persisted in localStorage
- 📊 **Ratings Chart** — Visual bar chart breakdown of 1–5 star ratings per app
- 💾 **Persistent Storage** — Installed apps saved to localStorage and restored on revisit
- 🔔 **Toast Notifications** — Real-time feedback on install/uninstall actions
- 📱 **Fully Responsive** — Mobile-first design that works on all screen sizes
 
---
 
## 🚀 Pages
 
| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with trending apps |
| Apps | `/apps` | Browse all apps with live search |
| App Details | `/appDetails/:id` | Full detail view with chart & install button |
| Installation | `/installation` | Dashboard of all installed apps |
 
---
 
## 🛠️ Technologies
 
### Core
| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing & data loaders |
 
### Styling
| Technology | Purpose |
|------------|---------|
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | Tailwind component library |
 
### Data & State
| Technology | Purpose |
|------------|---------|
| [Axios](https://axios-http.com/) | HTTP client for fetching app data |
| `localStorage` | Persisting installed app IDs on the client |
| React `useState` / `useLoaderData` | Local UI state & route data loading |
 
### UI & Libraries
| Technology | Purpose |
|------------|---------|
| [Recharts](https://recharts.org/) | Ratings breakdown bar chart |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications for uninstall actions |
| [SweetAlert2](https://sweetalert2.github.io/) | Install success popup dialog |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon set (FaStar, MdOutlineFileDownload, FaGithub, etc.) |
 
---
 