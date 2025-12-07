---
id: 7
title: Clarify Image Generation Limitations for Feature Cards
stage: general
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: none
branch: main
user: 
command: ok
labels: ["docusaurus", "images", "svg", "feature-cards", "limitations"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: []
tests_yaml: []
prompt_text: |
  there are three containers in my hero section having title "Physical AI Foundations", "ROS 2 & VLA Robotics", "Isaac Sim & Deployment" but the svg images on them are not according to the sneteses mentioned on these cards, select those images and set them which support these contents
  ok
response_text: |
  I have clarified to the user that I cannot generate custom SVG/PNG image content for their feature cards. I have instructed them to provide their own image files and offered to integrate them into the Docusaurus configuration once provided.
---
