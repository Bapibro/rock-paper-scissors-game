import random

def play():
    print("Welcome to Rock, Paper, Scissors Game!")
    print("Enter your choice: rock, paper or scissors")
    
    user = input("Your choice: ").lower()
    computer = random.choice(["rock", "paper", "scissors"])
    
    print(f"Computer chose: {computer}")

    if user == computer:
        return "It's a tie!"
    elif (user == "rock" and computer == "scissors") or \
         (user == "scissors" and computer == "paper") or \
         (user == "paper" and computer == "rock"):
        return "You win!"
    elif user in ["rock", "paper", "scissors"]:
        return "You lose!"
    else:
        return "Invalid input. Please choose rock, paper or scissors."

if __name__ == "__main__":
    while True:
        print(play())
        again = input("Do you want to play again? (yes/no): ").lower()
        if again != "yes":
            print("Thanks for playing! Goodbye 👋")
            break
