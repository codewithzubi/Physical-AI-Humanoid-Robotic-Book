---
sidebar_position: 2
sidebar_label: 'ROS 2 Nodes, Topics & Services'
id: nodes-topics-services
---

# ROS 2 Nodes, Topics, and Services: The Building Blocks

In ROS 2, robotic applications are typically built from many small, independent executable programs called **nodes**. These nodes communicate with each other using various communication mechanisms, primarily **topics** and **services**, forming a distributed computational graph. Understanding these fundamental building blocks is crucial for developing any ROS 2 application.

## 1. ROS 2 Nodes

A **node** is an executable process that performs a specific task. Each node should ideally be responsible for a single, well-defined function within the robot system. This modularity makes development easier, allows for parallel processing, and improves fault tolerance.

**Examples of Nodes:**
*   A sensor driver node that reads data from a lidar.
*   A motor control node that sends commands to robot wheels.
*   A navigation node that calculates paths.
*   A user interface node that displays robot status.

## 2. ROS 2 Topics: Asynchronous Communication

**Topics** are the most common way for nodes to exchange data. They implement a **publisher-subscriber** communication model.

*   **Publisher**: A node that sends (publishes) messages to a named topic.
*   **Subscriber**: A node that receives (subscribes to) messages from a named topic.

This model is asynchronous and one-way: publishers send data without knowing or caring if there are subscribers, and subscribers receive data without knowing or caring who the publishers are. Data flow is continuous, making topics ideal for streaming data like sensor readings, joint states, or video feeds.

**Key Characteristics of Topics:**
*   **Asynchronous**: No guaranteed response or acknowledgment.
*   **One-to-many**: A single publisher can have multiple subscribers, and multiple publishers can send to a single topic.
*   **Message Types**: Every topic has a defined message type (e.g., `sensor_msgs/msg/LaserScan`, `std_msgs/msg/String`), which dictates the structure of the data being transmitted.

**Conceptual Example:**
Imagine a robot with a camera and a display.
*   A `camera_node` **publishes** `sensor_msgs/msg/Image` messages on the `/camera/image` topic.
*   A `display_node` **subscribes** to the `/camera/image` topic to show the video feed.

## 3. ROS 2 Services: Synchronous Communication

**Services** implement a **client-server** communication model. Unlike topics, services are synchronous and designed for request/response interactions.

*   **Service Server**: A node that offers a named service. It waits for incoming requests, performs a computation, and sends back a response.
*   **Service Client**: A node that sends a request to a service server and waits for the response.

Services are best suited for actions that are not continuous, such as triggering an action, querying a specific piece of information, or performing a calculation where an immediate result is expected.

**Key Characteristics of Services:**
*   **Synchronous**: The client waits until the server responds.
*   **One-to-one**: A client sends a request to a server, and the server sends a response back to that client.
*   **Request/Response**: Every service has a defined request message type and a defined response message type.

**Conceptual Example:**
Consider a robot arm that needs to pick up an object.
*   A `manipulation_server_node` **offers** a `PickObject` service.
*   A `task_manager_node` **calls** the `PickObject` service, sending a request with the object's coordinates.
*   The `manipulation_server_node` performs the pick action and **returns** a response indicating success or failure.

## Conclusion

Nodes, topics, and services form the backbone of ROS 2 communication. By leveraging these mechanisms, you can design modular, distributed, and highly flexible robotic applications. In the next chapter, we'll explore more advanced communication patterns like actions and how to manage runtime parameters.