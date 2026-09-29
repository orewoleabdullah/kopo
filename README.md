# Kopo Landing Page

A clean, modern, and fully responsive landing page for **Kopo**, a student-first money management platform designed to help students save smarter, track spending, and build healthy financial habits without stress.

This project was built directly from a Figma design specification using pure HTML and CSS, and is deployed via GitHub Pages.

---

## 🔗 Live Demo

- **Live Website**: [https://orewoleabdullah.github.io/kopo/](https://orewoleabdullah.github.io/kopo/)
- **Repository**: [https://github.com/orewoleabdullah/kopo](https://github.com/orewoleabdullah/kopo)

---

## ✨ Features

- **Sticky Navigation Bar**: Stays pinned at the top with a subtle elevation shadow and smooth hover transitions on navigation links.
- **Hero Section**: High-impact messaging with dual call-to-action buttons ("Join Waitlist" and "Learn More") and visual imagery.
- **Value Proposition**: Highlights core student financial behaviors with pill-style feature badges.
- **Problem Statement**: Directly articulates the real financial challenges student life presents.
- **Feature Cards**: A 4-column grid detailing key platform capabilities (Smart Saving, Spending Awareness, Simple Experience, and Community) paired with clean SVG icons.
- **How It Works**: A structured 3-step walkthrough with distinct dark and mint-accent cards.
- **Trust & Security**: Builds confidence for both students and parents.
- **Waitlist Form**: An email capture form with accessible labels and custom styled inputs.
- **Responsive Layout**: Fluid layouts engineered with CSS Grid and Flexbox that adapt seamlessly across mobile (390px), tablet (768px/900px), and desktop (1200px+) screens.

---

## 🛠️ Built With

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) and accessibility best practices.
- **CSS3**: Vanilla CSS with custom properties (CSS variables), CSS Grid, Flexbox, media queries, and smooth transitions.
- **Google Fonts**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) typography.
- **Lucide Icons**: Crisp, lightweight SVG icons.
- **GitHub Pages**: Fast, static site hosting and deployment.

---

## 📁 Project Structure

```text
kopo/
├── assets/
│   └── logo.png         # Kopo brand logo & site favicon
├── index.html           # Main semantic HTML structure & metadata
├── style.css            # Design tokens, layout rules, and responsive media queries
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites

You only need a modern web browser (such as Chrome, Firefox, Edge, or Safari).

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/orewoleabdullah/kopo.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd kopo
   ```

3. **Open the project**:
   - Double-click `index.html` to open it directly in your browser, or
   - Use a local development server such as VS Code's **Live Server** extension or Python's built-in HTTP server:
     ```bash
     python -m http.server 3000
     ```
     Then visit `http://localhost:3000` in your browser.

---

## 🌐 Deployment

This project is deployed using **GitHub Pages**:

1. Pushed to the `main` branch of the GitHub repository.
2. Configured in GitHub repository settings under **Pages** with the source branch set to `main` / root (`/`).
3. Updates pushed to `main` trigger automatic deployments to:
   [https://orewoleabdullah.github.io/kopo/](https://orewoleabdullah.github.io/kopo/)

---

## 💡 What I Learned

- **Figma to Code Accuracy**: Translating Figma visual hierarchy, color palettes, spacing, and typography into clean, maintainable code without utility libraries.
- **CSS Architecture**: Structuring a custom design system with `:root` CSS variables for brand colors, background tints, and typography tokens.
- **Modern Responsive Design**: Leveraging CSS Grid and Flexbox with well-targeted media queries to create responsive layouts that reorder elements naturally on smaller screens (such as placing explanatory text above step cards on mobile).
- **Micro-Interactions**: Implementing smooth hover states, interactive buttons, and sticky navigation to elevate perceived polish and user experience.
- **Web Standards & SEO**: Structuring the document `<head>` with descriptive meta tags, theme colors, favicons, and semantic HTML landmarks.

---

## 👤 Author

**Abdullah Orewole**

- GitHub: [@orewoleabdullah](https://github.com/orewoleabdullah)
- Repository: [kopo](https://github.com/orewoleabdullah/kopo)
