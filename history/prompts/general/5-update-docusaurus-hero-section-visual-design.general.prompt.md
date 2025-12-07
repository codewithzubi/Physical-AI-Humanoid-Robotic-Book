---
id: 5
title: Update Docusaurus Hero Section Visual Design
stage: general
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: none
branch: main
user: 
command: |-
  Update the Docusaurus Hero Section visual design for my textbook
  "Physical AI & Humanoid Robotics".

  Instructions:
  1. Replace the default Docusaurus hero image with a new image that matches
     the theme of my book.
  2. The new hero image should visually represent:
     - Humanoid robots
     - ROS 2 ecosystems
     - Embodied intelligence / Physical AI
     - Isaac Sim or simulation-based robotics
     - Futuristic engineering aesthetics
  3. The image should have a clean, professional, glossy, high-tech style suitable
     for a textbook landing page.
  4. The layout should remain compatible with Docusaurus Hero components.
  5. If needed, generate or reference an SVG/PNG file and place it under:
     `static/img/hero-robotics.png`
  6. Update the HeroSection code to use this new image:
     - heroImage: require('@site/static/img/hero-robotics.png').default

  Deliverables:
  - One hero image (robotics-themed) saved to the static/img folder
  - Updated JSX/TSX code for HeroSection using the new image
  - No other styling should be changed unless required for alignment
response_text: |
  I have successfully updated the Docusaurus Hero Section visual design. I created a placeholder image `docs/static/img/hero-robotics.png`, modified `docs/src/pages/index.js` to import and display this image, and updated `docs/src/pages/index.module.css` to manage the styling and layering. The user should replace the placeholder image with a high-quality, robotics-themed image matching their specifications.
---
