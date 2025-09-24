<!-- This is the README for JXL Studio -->
<!-- Documentation starts here -->

[# JXL Studio - Creative Design Agency]

## Overview

JXL Studio is a creative design agency website showcasing digital design, branding, web development, and marketing services. The site is built with HTML, CSS, and JavaScript, featuring a modern, responsive, and interactive user experience.

## Project Structure

```
creative-work/
├── img-1.jpeg ... img-7.jpeg   # Portfolio and hero images
├── index.html                  # Main HTML file
├── README.md                   # Project documentation
├── scripts/
│   └── main.js                 # JavaScript for interactivity
└── styles/
		└── main.css                # Custom styles
```

## Features

- **Responsive Design:** Adapts to all screen sizes using CSS Grid, Flexbox, and media queries.
- **Navigation:** Fixed header with smooth scrolling and mobile hamburger menu.
- **Hero Section:** Eye-catching intro with background image and overlay.
- **Portfolio:** Grid of projects with hover effects and overlays.
- **About:** Studio description and team philosophy.
- **Services:** List of agency offerings with icons and animations.
- **Contact:** Info, social links, and a contact form with validation.
- **Footer:** Newsletter subscription and quick links.
- **Animations:** Fade-in and slide-up effects on scroll.

## Technologies Used

- **HTML5**: Semantic structure for all sections.
- **CSS3**: Custom properties, grid/flex layouts, transitions, and keyframe animations.
- **JavaScript (ES6)**: Handles menu toggling, smooth scroll, scroll-triggered animations, form validation, and image preloading.
- **Font Awesome**: Icon library for service and contact icons.

## How It Works

### HTML (`index.html`)

- Defines all main sections: header, hero, portfolio, about, services, contact, and footer.
- Links to external CSS and JS files.
- Uses anchor links for navigation and section IDs for smooth scrolling.

### CSS (`styles/main.css`)

- Resets and base styles for consistency.
- CSS variables for easy theming.
- Responsive layouts with media queries.
- Animations for interactive elements.

### JavaScript (`scripts/main.js`)

- Initializes interactive features on DOM load:
  - Mobile menu toggle and hamburger animation
  - Smooth scrolling for navigation
  - Scroll-triggered fade/slide animations
  - Header background change on scroll
  - Portfolio hover and click effects
  - Contact form validation and simulated submission
  - Newsletter form validation and simulated submission
  - Image preloading for performance

## Usage

1. Open `index.html` in a web browser.
2. All assets and scripts are loaded locally; no build step required.
3. Edit images, text, or styles as needed for customization.

## Customization

- Replace images (`img-*.jpeg`) for your own portfolio.
- Update text content in `index.html` for your agency.
- Modify colors, fonts, or layout in `styles/main.css`.
- Extend or change interactivity in `scripts/main.js`.

## License

This project is for educational and demonstration purposes. Please replace branding and assets for commercial use.

# creative-work
