# Content Structure Contracts for Docusaurus Site

This document outlines the contracts for the structure and metadata of content files within the Docusaurus site for the "Physical AI & Humanoid Robotics" textbook. These contracts ensure consistency, maintainability, and proper rendering of the educational materials.

## 1. Markdown File Structure

All content chapters and pages MUST be written in Markdown (`.md`) or MDX (`.mdx`) format.

### Front Matter (YAML)

Each Markdown/MDX file representing a chapter or significant page MUST include a YAML front matter block at the beginning of the file. This block is used by Docusaurus for metadata and navigation.

**Required Fields**:

-   `title`: (string) The title of the page/chapter. This will be displayed in the browser tab and in the navigation.
-   `sidebar_label`: (string) The text that appears in the sidebar navigation for this page/chapter.
-   `sidebar_position`: (number) Controls the order of items in the sidebar. Lower numbers appear higher.
-   `id`: (string) A unique identifier for the document. This should typically match the filename (without extension).

**Optional Fields**:

-   `description`: (string) A brief description of the content, used for SEO and potentially in list views.
-   `slug`: (string) Custom URL path for the page. If not specified, Docusaurus generates one from the filename.
-   `tags`: (array of strings) A list of tags for categorization.
-   `keywords`: (array of strings) A list of keywords for SEO.

**Example Front Matter**:

```markdown
---
title: "Introduction to ROS 2"
sidebar_label: "ROS 2 Basics"
sidebar_position: 1
id: ros2-introduction
description: "An introductory chapter to the Robot Operating System 2 (ROS 2)."
tags: ["ros2", "robotics", "middleware"]
keywords: ["ROS 2 tutorial", "robotics basics"]
---
```

### Content Formatting

-   **Headings**: Use ATX style headings (`#`, `##`, `###`, etc.). Top-level heading (`#`) should match the `title` in front matter.
-   **Code Blocks**: Use fenced code blocks with language specifiers for syntax highlighting (e.g., ````python`).
-   **Callouts/Admonitions**: Utilize Docusaurus's built-in admonitions for notes, warnings, tips, etc. (e.g., `:::note`, `:::warning`).
-   **Images**: Reference images using relative paths to the `static` directory or a local `img` directory within the chapter's folder.
-   **Links**: Use relative paths for internal links within the Docusaurus site.

## 2. Navigation Structure (`sidebars.js`)

The `sidebars.js` file defines the structure of the left-hand navigation menu. This contract ensures a logical flow through the textbook's modules and chapters.

### Structure

-   The sidebar MUST be organized into categories representing the main `Modules` of the textbook (e.g., "Foundations", "ROS 2 Fundamentals", "Robot Simulation").
-   Each category MUST contain items that correspond to the `Chapters` within that module.
-   The order of categories and items within them is determined by `sidebar_position` in the front matter and the order in `sidebars.js`.

**Example `sidebars.js` Snippet**:

```javascript
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: Foundations',
      items: ['intro', 'foundations/physical-ai', 'foundations/embodied-intelligence'],
    },
    {
      type: 'category',
      label: 'Module 2: ROS 2 Fundamentals',
      items: [
        'ros2/introduction',
        'ros2/nodes-topics-services',
        'ros2/actions-parameters',
      ],
    },
    // ... other modules
  ],
};
```

### Category Metadata (`_category_.json`)

For directory-based categories, a `_category_.json` file can be used to provide metadata for the category itself (e.g., `label`, `position`, `link`).

**Example `_category_.json`**:

```json
{
  "label": "Module 2: ROS 2 Fundamentals",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Learn the core concepts of ROS 2 for robot development."
  }
}
```

## 3. Code Example Integration

Code examples included in chapters MUST be easily reproducible.

-   Code snippets SHOULD be embedded directly into Markdown files using fenced code blocks.
-   For longer or more complex examples, a reference to an external file in a dedicated `code/` repository or a sub-directory within the Docusaurus project (e.g., `docs/code-examples/ros2/hello_world.py`) SHOULD be provided.
-   All external code examples MUST be testable and runnable within the recommended environment.

## 4. Referencing and Citations

-   All citations MUST follow APA style guidelines.
-   References SHOULD be managed consistently (e.g., using Docusaurus's remark-cite plugin if adopted, or a dedicated references section per chapter/module).

## 5. Image and Asset Management

-   All images and static assets MUST be stored in the `static/` directory of the Docusaurus project or in an `img/` subdirectory within the respective content folder.
-   File names for assets SHOULD be descriptive and follow a consistent naming convention (e.g., `module-x-concept-y.png`).
