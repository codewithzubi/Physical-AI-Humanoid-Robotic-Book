---
sidebar_position: 3
sidebar_label: 'ROS 2 Actions & Parameters'
id: actions-parameters
---

# ROS 2 Actions and Parameters: Advanced Control and Configuration

Building on topics and services, ROS 2 provides **actions** for long-running, goal-oriented tasks with periodic feedback, and **parameters** for dynamic configuration of nodes. These mechanisms are crucial for developing more complex and adaptable robotic behaviors.

## 1. ROS 2 Actions: Goal-Oriented, Long-Running Tasks

**Actions** are designed for tasks that might take a significant amount of time to complete and require active feedback during execution. They combine aspects of both topics (for feedback) and services (for a goal and result). Actions are typically used for tasks like navigating to a goal, performing a complex manipulation sequence, or executing a long-duration behavior.

An action communication involves three types of messages:
*   **Goal**: Sent by a client to request the action.
*   **Feedback**: Sent periodically by the action server to the client, providing updates on the progress of the action.
*   **Result**: Sent by the action server to the client once the action is complete (or aborted), indicating the final outcome.

**Key Characteristics of Actions:**
*   **Asynchronous Execution with Feedback**: Clients don't block while waiting; they receive continuous updates.
*   **Preemptable**: Clients can cancel an action already in progress.
*   **Goal-Oriented**: Clearly defined start (goal) and end (result).

**Conceptual Example:**
Consider a mobile robot commanded to navigate to a specific room.
*   A `navigation_client_node` **sends a goal** to the `/navigate_to_pose` action server, specifying the target room.
*   The `navigation_server_node` continuously **sends feedback** to the client (e.g., current position, distance to goal, estimated time remaining).
*   If the robot reaches the room, the server **sends a result** (e.g., "success"). If it gets stuck, it might send "aborted". The client could also send a "cancel" request.

## 2. ROS 2 Parameters: Dynamic Configuration

**Parameters** allow nodes to expose configurable values that can be changed dynamically at runtime without recompiling or restarting the node. This is incredibly useful for fine-tuning algorithms, adjusting sensor sensitivities, or switching between operational modes.

Each parameter has a name, a type (e.g., integer, float, string, boolean), and a value. Nodes can declare parameters, set default values, and respond to changes.

**Key Characteristics of Parameters:**
*   **Dynamic**: Values can be read and modified during node execution.
*   **Centralized Management**: Parameters can be accessed and controlled using command-line tools (`ros2 param`) or through dedicated client libraries.
*   **Node-Specific**: Each node manages its own set of parameters.

**Conceptual Example:**
A camera driver node might have a parameter for `exposure_time` (float) and `frame_rate` (integer).
*   Initially, `exposure_time` is set to `0.01` and `frame_rate` to `30`.
*   An operator or another node can use `ros2 param set /camera_node exposure_time 0.05` to increase the exposure time to brighten images without restarting the camera node.
*   The camera node's logic would automatically adapt to the new parameter value.

## Conclusion

Actions and parameters provide powerful mechanisms for building more sophisticated and flexible ROS 2 applications. Actions enable robust execution of long-running tasks with rich feedback, while parameters offer dynamic control over node behavior. Together with topics and services, they complete the core communication and configuration toolkit for ROS 2 developers.