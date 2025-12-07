---
sidebar_position: 100
sidebar_label: 'Quickstart Guide'
id: quickstart
---

# Quickstart Guide: Physical AI & Humanoid Robotics Textbook Project

This guide provides quick steps to get the "Physical AI & Humanoid Robotics" textbook project up and running. It covers setting up the documentation environment (Docusaurus) and outlines the initial steps for configuring the robotics simulation environments.

## 1. Setting up the Docusaurus Documentation Site

To view, build, and contribute to the textbook content, you need to set up the Docusaurus project.

### Prerequisites

-   Node.js (LTS version, e.g., 18.x or 20.x)
-   npm (Node Package Manager)

### Steps

1.  **Clone the Repository**:
    ```bash
    git clone [repository_url]
    cd physical-ai-robotics-textbook # Or wherever you cloned it
    ```

2.  **Navigate to the `docs` Directory**:
    The Docusaurus project is located in the `docs/` subdirectory of this repository.
    ```bash
    cd docs
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Start the Development Server**:
    This will launch a local development server and open the site in your browser. Any changes you make to the Markdown files will be live-reloaded.
    ```bash
    npm run start
    ```

5.  **Build the Static Site (for deployment)**:
    This command generates static HTML, CSS, and JavaScript files in the `build/` directory, ready for deployment to platforms like GitHub Pages.
    ```bash
    npm run build
    ```
    The build output will be in `docs/build/`.

## 2. Setting up Robotics Simulation Environments (High-Level)

The textbook will leverage several simulation platforms. Detailed setup instructions for each will be provided within their respective modules in the book. This section provides a high-level overview.

### Prerequisites (General)

-   A Linux-based operating system (Ubuntu LTS recommended) for ROS 2.
-   Sufficient hardware resources (CPU, GPU, RAM) as detailed in the "Hardware Requirements" section of the book.

### Key Environments

1.  **ROS 2 (Robot Operating System 2)**:
    -   Installation of ROS 2 Humble or Iron.
    -   Setup of a ROS 2 workspace.
    -   Installation of relevant ROS 2 packages for robot control and simulation.

2.  **Gazebo**:
    -   Installation of Gazebo (usually bundled with ROS 2 or installed separately).
    -   Familiarization with Gazebo models and world files.

3.  **NVIDIA Isaac Sim**:
    -   Installation of NVIDIA Omniverse Launcher and Isaac Sim application.
    -   Setup of Python environment for Isaac Sim scripting and ROS 2 bridge.
    -   Requires an NVIDIA GPU.

4.  **Unity (for Robotics Simulation)**:
    -   Installation of Unity Hub and Unity Editor.
    -   Setup of Unity Robotics packages (e.g., URDF Importer, ROS-TCP-Endpoint).
    -   Development of custom simulation environments within Unity.

## 3. Contributing to the Content

-   Content is written in Markdown/MDX files within the `docs/` directory.
- Follow for consistent formatting and metadata.
-   Submit changes via Git pull requests.

## 4. Where to Go Next

-   For detailed Docusaurus information, refer to the [official Docusaurus documentation](https://docusaurus.io/docs).
-   For in-depth setup of robotics tools, proceed to the relevant modules within the textbook.
