---
sidebar_position: 4
sidebar_label: 'ROS 2 Environment Setup'
id: ros2-setup
---

# ROS 2 Environment Setup: Getting Started

This chapter provides detailed, step-by-step instructions for setting up your ROS 2 development environment. We will focus on Ubuntu Linux, as it is the recommended operating system for ROS 2. The instructions will cover the installation of ROS 2 Humble or Iron, configuring your workspace, and verifying the installation.

## Prerequisites

Before you begin, ensure your system meets the following requirements:

*   **Operating System**: Ubuntu 22.04 (Jammy Jellyfish) for ROS 2 Humble, or Ubuntu 20.04 (Focal Fossa) for ROS 2 Foxy/Iron. We recommend using the latest LTS (Long Term Support) version of Ubuntu.
*   **Internet Connection**: Required for downloading packages.
*   **User Privileges**: You will need `sudo` access to install system-level packages.

## Step 1: Set Your Locale

Ensure you have a locale that supports UTF-8. You can check your current locale with `locale`. If it's not UTF-8, you can set it:

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

## Step 2: Add the ROS 2 APT Repository

ROS 2 packages are available through a dedicated APT repository.

1.  **Add GPG Key**:
    ```bash
    sudo apt update && sudo apt install curl -y
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    ```

2.  **Add Repository to Sources List**:
    Choose the appropriate command for your Ubuntu version and ROS 2 distribution:

    *   **Humble Hawksbill (Ubuntu 22.04)**:
        ```bash
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
        ```
    *   **Iron Irwini (Ubuntu 22.04)**:
        ```bash
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
        ```

    *(Note: For simplicity, the command for Iron is the same as Humble for Ubuntu 22.04, as Iron is also built on it. Ensure you select the correct ROS 2 distribution when installing in the next step.)*

## Step 3: Install ROS 2 Packages

Update your package list and then install the full ROS 2 desktop environment.

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-[DISTRO]-desktop -y
```
Replace `[DISTRO]` with `humble` or `iron` (e.g., `ros-humble-desktop`).

## Step 4: Environment Setup

Source the ROS 2 setup file to make ROS 2 commands available in your current shell.

```bash
source /opt/ros/[DISTRO]/setup.bash
```
*(Replace `[DISTRO]` with `humble` or `iron`)*

For convenience, you can add this to your `~/.bashrc` file to automatically source it every time you open a new terminal:

```bash
echo "source /opt/ros/[DISTRO]/setup.bash" >> ~/.bashrc
```

## Step 5: Install `rosdep`

`rosdep` is a command-line tool for installing system dependencies for ROS packages.

```bash
sudo apt install python3-rosdep -y
sudo rosdep init
rosdep update
```

## Step 6: Create a ROS 2 Workspace (Optional but Recommended)

A workspace is a directory where you can store your own ROS 2 packages and build them.

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build --symlink-install
```

## Step 7: Verify Your Installation

Run some basic ROS 2 examples to verify your installation.

1.  **Open Terminal 1**:
    ```bash
    source /opt/ros/[DISTRO]/setup.bash
    ros2 run demo_nodes_cpp talker
    ```

2.  **Open Terminal 2**:
    ```bash
    source /opt/ros/[DISTRO]/setup.bash
    ros2 run demo_nodes_py listener
    ```
    You should see messages being published by the `talker` and received by the `listener`.

3.  **Run `rqt_graph`**:
    ```bash
    source /opt/ros/[DISTRO]/setup.bash
    rqt_graph
    ```
    This tool provides a graphical representation of the ROS 2 computational graph, showing nodes and topics.

Congratulations! Your ROS 2 environment is now set up. You're ready to start developing robotic applications.