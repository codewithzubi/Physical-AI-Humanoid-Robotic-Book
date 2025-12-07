# Data Model: Physical AI & Humanoid Robotics Textbook

This document outlines the key entities and their relationships for the "Physical AI & Humanoid Robotics" textbook content, primarily focusing on its structure as a Docusaurus site.

## Entities

### 1. Module

- **Description**: A self-contained, high-level section of the textbook covering a specific major topic or learning area. Modules serve as the primary organizational unit for content, grouping related chapters and tutorials.
- **Fields**:
    - `id`: Unique identifier (e.g., `module-1-ros2`).
    - `title`: Human-readable title (e.g., "ROS 2 Fundamentals").
    - `description`: Brief overview of the module's content and learning objectives.
    - `chapters`: A list of `Chapter` entities contained within this module, defining the sequence of topics.
    - `prerequisites`: Optional list of other `Module` or `Chapter` IDs that must be completed before this module.
    - `learning_outcomes`: Specific, measurable objectives a learner should achieve after completing the module.
- **Relationships**:
    - Contains many `Chapter` entities.
    - Can have `prerequisites` (referencing other `Module` or `Chapter` entities).

### 2. Chapter

- **Description**: A granular section within a `Module`, focusing on a specific concept, tutorial, or practical application. Chapters form the core narrative and instructional units of the textbook.
- **Fields**:
    - `id`: Unique identifier (e.g., `ch-ros2-basics`).
    - `title`: Human-readable title (e.g., "Introduction to ROS 2 Nodes").
    - `module_id`: Foreign key referencing the parent `Module`.
    - `content`: The main body of the chapter, including explanations, diagrams, code examples, exercises. This will be primarily Markdown text.
    - `learning_objectives`: Specific goals for the chapter.
    - `examples`: List of code examples or conceptual demonstrations.
    - `exercises`: List of hands-on activities or questions for learners.
    - `references`: Citations and links to external resources (APA style).
- **Relationships**:
    - Belongs to one `Module`.
    - Can contain multiple `CodeExample` and `Exercise` entities (implicitly within `content`).

### 3. CodeExample

- **Description**: A discrete, runnable code snippet demonstrating a concept or functionality.
- **Fields**:
    - `id`: Unique identifier.
    - `title`: Description of what the example demonstrates.
    - `language`: Programming language (e.g., `python`, `cpp`).
    - `filepath`: Relative path to the code file within the project's code repository.
    - `content`: The actual code block.
    - `explanation`: Text explaining the code.
    - `dependencies`: Software or libraries required to run the example.
    - `hardware_requirements`: Optional; specific hardware needed (e.g., "Jetson Nano").
- **Relationships**:
    - Associated with one or more `Chapter` entities.

### 4. Exercise

- **Description**: A practical task or problem for the learner to solve, applying concepts learned in a `Chapter`.
- **Fields**:
    - `id`: Unique identifier.
    - `title`: Description of the exercise.
    - `chapter_id`: Foreign key referencing the parent `Chapter`.
    - `instructions`: Detailed steps for completing the exercise.
    - `expected_outcome`: What the learner should achieve/observe.
    - `solution_hint`: Optional hint or pointer towards the solution.
    - `solution_filepath`: Optional; path to a reference solution.
- **Relationships**:
    - Associated with one `Chapter`.

### 5. Docusaurus Page/Document

- **Description**: Represents an individual Markdown file or React component that Docusaurus renders as a web page. This is the concrete implementation of `Module` and `Chapter` content.
- **Fields**:
    - `filepath`: The path to the Markdown or MDX file (e.g., `docs/modules/ros2/intro.md`).
    - `front_matter`: YAML metadata at the top of the Markdown file (e.g., `title`, `sidebar_label`, `slug`).
    - `content`: The rendered Markdown/MDX.
- **Relationships**:
    - A `Chapter` typically maps to one or more `Docusaurus Page/Document`.
    - `Module`s are represented by directories and `_category_.json` files in Docusaurus.

## Relationships Overview

- `Module` 1 -- has many --> N `Chapter`
- `Chapter` 1 -- has many --> N `CodeExample` (embedded or linked)
- `Chapter` 1 -- has many --> N `Exercise` (embedded or linked)
- `Module`/`Chapter` content is implemented as `Docusaurus Page/Document`s.

## Validation Rules (Examples)

- All `Chapter` entities must belong to a `Module`.
- All `CodeExample`s and `Exercise`s must be associated with a `Chapter`.
- `id` fields must be unique across their respective entity types.
- `references` in `Chapter` must follow APA style.
- `filepath`s for `CodeExample`s and `Docusaurus Page/Document`s must resolve to existing files.