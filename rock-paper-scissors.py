import random
import os


def start_game():
    continue_playing = True
    while continue_playing is True:
        bot_choice = random.choice(['rock', 'paper', 'scissors'])
        user_choice = input('Please choose between Rock, Paper or Scissors: ').lower()

        result = ''

        if user_choice == 'rock' or user_choice == 'scissors' or user_choice == 'paper':

            if bot_choice == 'rock':  # Every possibility if bot_choice == 'rock'
                if user_choice == 'rock':
                    result = 'tie'
                elif user_choice == 'scissors':
                    result = 'bot win'
                elif user_choice == 'paper':
                    result = 'user win'

            if bot_choice == 'scissors':  # Every possibility if bot_choice == 'paper'
                if user_choice == 'rock':
                    result = 'user win'
                elif user_choice == 'scissors':
                    result = 'tie'
                elif user_choice == 'paper':
                    result = 'bot win'

            if bot_choice == 'paper':  # Every possibility if bot_choice == 'paper'
                if user_choice == 'rock':
                    result = 'bot win'
                elif user_choice == 'scissors':
                    result = 'user win'
                elif user_choice == 'paper':
                    result = 'tie'

                print('The bot chose {}.'.format(bot_choice))

                if result == 'user win':
                    print("You won the game!")
                elif result == 'bot win':
                    print("The bot won... Well get 'em next time")
                elif result == 'tie':
                    print('The game was a tie.')

        # Check if the user wants to play another time or not
        # temp = input('Would you like to play another time? (y/n): '.lower())
        # if temp == 'yes' or temp == 'yes':
        #     continue_playing = True
        # else:
        #     continue_playing = False


start_game()
# comment
# comment x2

os.system('PAUSE')
