import time

def simulate_voice_command(command_text):
    """
    Simulates a voice command being processed by a VLA pipeline.
    """
    print(f"Human: \"{command_text}\"")
    time.sleep(0.5)

    # --- Simulated Language/Planning (LLM-like logic) ---
    # In a real VLA, an LLM would parse, reason, and generate a plan.
    # Here, we use simple keyword matching for demonstration.
    action_plan = []
    if "go to" in command_text.lower():
        target = command_text.lower().split("go to")[-1].strip()
        action_plan.append(f"NAVIGATE_TO({target})")
    if "pick up" in command_text.lower():
        target = command_text.lower().split("pick up")[-1].split(" and")[0].strip()
        action_plan.append(f"PICK_UP({target})")
    if "bring" in command_text.lower() and "to me" in command_text.lower():
        target = command_text.lower().split("bring")[-1].split("to me")[0].strip()
        action_plan.append(f"DELIVER_TO_HUMAN({target})")
    elif "wave" in command_text.lower():
        action_plan.append("PERFORM_WAVE()")

    if not action_plan:
        action_plan.append("UNKNOWN_COMMAND()")

    print(f"Robot (LLM): Interpreted as {', '.join(action_plan)}")
    time.sleep(1)

    # --- Simulated Action Execution ---
    for action in action_plan:
        if "NAVIGATE_TO" in action:
            target = action.split('(')[1].split(')')[0]
            print(f"Robot (Action): Moving to {target}...")
            time.sleep(1.5)
            print(f"Robot (Action): Reached {target}.")
        elif "PICK_UP" in action:
            target = action.split('(')[1].split(')')[0]
            print(f"Robot (Action): Attempting to pick up {target}...")
            time.sleep(2)
            print(f"Robot (Action): Successfully picked up {target}.")
        elif "DELIVER_TO_HUMAN" in action:
            target = action.split('(')[1].split(')')[0]
            print(f"Robot (Action): Delivering {target} to human...")
            time.sleep(2.5)
            print(f"Robot (Action): Delivered {target}.")
        elif "PERFORM_WAVE" in action:
            print("Robot (Action): Waving...")
            time.sleep(1.0)
            print("Robot (Action): Wave complete.")
        else:
            print(f"Robot (Action): Cannot execute {action}.")
        time.sleep(0.5) # Short pause between actions

    print("\nRobot: Task completed or command not fully understood.")

if __name__ == "__main__":
    print("--- Simulating Voice Command Execution (VLA Pipeline) ---")
    print("--- Enter commands like 'Go to the kitchen', 'Pick up the blue ball', 'Wave' ---")
    print("--- Type 'exit' to quit ---")

    while True:
        command = input("\nEnter your command: ")
        if command.lower() == 'exit':
            break
        simulate_voice_command(command)
    print("\nExiting VLA simulation.")
