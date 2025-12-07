// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // This corresponds to docs/intro.md
      label: 'Introduction & Overview',
    },
    {
      type: 'category',
      label: 'Module 1: Foundations',
      link: {
        type: 'generated-index',
        title: 'Module 1: Foundations',
        description: 'Explore the core concepts of Physical AI and Embodied Intelligence.',
        slug: '/category/foundations',
      },
      items: [
        'foundations/physical-ai', // Corresponds to docs/foundations/physical-ai.md
        'foundations/embodied-intelligence', // Corresponds to docs/foundations/embodied-intelligence.md
      ],
    },
    {
      type: 'category',
      label: 'Module 2: ROS 2 Fundamentals',
      link: {
        type: 'generated-index',
        title: 'Module 2: ROS 2 Fundamentals',
        description: 'Learn the basics of Robot Operating System 2 for robotics development.',
        slug: '/category/ros2-fundamentals',
      },
      items: [
        'ros2/ros2-introduction',
        'ros2/nodes-topics-services',
        'ros2/actions-parameters',
        'ros2/ros2-setup', // ROS 2 setup instructions
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Simulation Platforms',
      link: {
        type: 'generated-index',
        title: 'Module 3: Simulation Platforms',
        description: 'Dive into robot simulation with Gazebo, Unity, and NVIDIA Isaac Sim.',
        slug: '/category/simulation-platforms',
      },
      items: [
        // Placeholder for now, to be filled by later tasks
        // e.g., 'simulation/gazebo-basics', 'simulation/unity-robotics', 'simulation/isaac-sim-intro'
      ],
    },
    {
      type: 'category',
      label: 'Module 4: NVIDIA Isaac & VLA',
      link: {
        type: 'generated-index',
        title: 'Module 4: NVIDIA Isaac & VLA',
        description: 'Explore NVIDIA Isaac Platform and Vision-Language-Action pipelines.',
        slug: '/category/isaac-vla',
      },
      items: [
        'isaac/isaac-introduction',
        'isaac/isaac-vla-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Capstone Project',
      link: {
        type: 'generated-index',
        title: 'Module 5: Capstone Project',
        description: 'Build your autonomous humanoid robot project.',
        slug: '/category/capstone-project',
      },
      items: [
        'capstone/capstone-project-overview',
        'capstone/capstone-vla-integration',
      ],
    },
    {
      type: 'category',
      label: 'Module 6: Advanced Concepts',
      link: {
        type: 'generated-index',
        title: 'Module 6: Advanced Concepts',
        description: 'Delve into advanced topics like sensor fusion and reinforcement learning.',
        slug: '/category/advanced-concepts',
      },
      items: [
        'advanced/sensor-fusion',
        'advanced/reinforcement-learning',
      ],
    },
    {
      type: 'category',
      label: 'Module 7: Hardware & Lab Architecture',
      link: {
        type: 'generated-index',
        title: 'Module 7: Hardware & Lab Architecture',
        description: 'Understand hardware requirements and lab setup for Physical AI.',
        slug: '/category/hardware-lab-architecture',
      },
      items: [
        // Placeholder for now
        // e.g., 'hardware/workstation-requirements', 'hardware/edge-ai-kits'
      ],
    },
    {
      type: 'doc',
      id: 'quickstart', // This corresponds to docs/quickstart.md
      label: 'Quickstart Guide',
    },
  ],
};

export default sidebars;