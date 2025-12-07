import rclpy
from rclpy.node import Node
import time

class HelloWorldRobot(Node):

    def __init__(self):
        super().__init__('hello_world_robot')
        self.get_logger().info('Hello, ROS 2! Initializing robot for a simple wave.')
        self.timer = self.create_timer(1.0, self.perform_wave) # Call perform_wave every 1 second
        self.wave_count = 0

    def perform_wave(self):
        if self.wave_count < 3: # Perform wave 3 times
            self.get_logger().info('Robot Waving! (This is a simulated action)')
            self.wave_count += 1
        else:
            self.get_logger().info('Wave complete! Shutting down.')
            self.timer.cancel() # Stop the timer
            self.destroy_node()
            rclpy.shutdown()

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = HelloWorldRobot()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
