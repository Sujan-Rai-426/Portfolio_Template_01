# Portfolio Website Template - Frontend Documentation

CodeVora

Welcome to the **Frontend** documentation for the Portfolio Website template.  
This documentation will guide you through **installation**, **usage**, **structure**, and **features** of the template.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Folder Structure](#folder-structure)  
7. [Customization](#customization)  
8. [Deployment](#deployment)  
9. [License](#license)

---

## Introduction

This template is a **responsive, modern, and professional portfolio website** built using **React**.  
It includes smooth scroll animations, dark/light mode toggle, and sections for:

- Hero  
- About  
- Education  
- Projects  
- Skills  
- Contact  
- Footer  

Animations are triggered as sections enter the viewport, giving a dynamic user experience.

---

## Features

- Fully responsive layout for desktop, tablet, and mobile  
- Dark / Light mode toggle  
- Smooth scroll navigation  
- Section animations on viewport entry  
- Hero section with profile image  
- About, Skills, Projects, Education, and Contact sections  
- Contact form (demo functionality)  
- Footer with social links  
- Modern, minimalistic design suitable for developers  

---

## Technologies Used

- **React** - Component-based UI library  
- **CSS / Bootstrap 5** - Styling and layout  
- **Intersection Observer API** - Section animations  
- **React Context API** - State management for animations & dark mode  
- **Vite** - Fast build & development tool  
- **Git & GitHub** - Version control  

---

## Installation

1.Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git

```

2.Install necessary dependencies:

```bash
 cd Frontend
 npm install

```

3.Run Development Server

```bash
npm run dev

```

---

## Folder Structure

-    Frontend/
        ├─ public/           # Static assets (favicon, images, etc.)
        ├─ src/
        │  ├─ assets/        # CSS, images, fonts
        │  ├─ components/    # Reusable components (Navbar, Hero, About, etc.)
        │  ├─ context/       # Context API for dark mode & animations
        │  ├─ pages/         # Main pages (Home)
        │  └─ main.jsx       # React entry point
        ├─ package.json
        ├─ vite.config.js
        └─ README.md


---

## Deployment

**Netlify**: Drag and drop dist/ folder in Netlify dashboard or connect GitHub repo.
**Vercel**: Connect GitHub repo and set Project/Frontend as root.
**CodeVora**: Upload dist/ folder and link the documentation URL for live preview.


---
## License

- This template is MIT licensed. You are free to use and modify it for personal or commercial projects.

Developed by CodeVora [Sujan-Rai]
- Portfolio: [`sujan140.vercel.app`](https://sujan140.vercel.app)
- CodeVora: [`codevora140.vercel.app`](https://codevora140.vercel.app)


