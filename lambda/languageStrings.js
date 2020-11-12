const SPEECH_STATEMENTS =
  "Statement one is: %s Statement two is: %s And statement three is: %s Now, which one do you think is a lie?";
const COMPLETED_ALL =
  "Congratulations! You have completed all questions for this difficulty. The difficulty levels are easy and hard. Which difficulty would you like to try next?";
const SAY_DIFFICULTY = "Say a difficulty level, easy or hard, to get started!";

module.exports = {
  translation: {
    SKILL_NAME: "Two Truths and a Lie Game",
    EXIT_MESSAGE:
      "Thanks for playing! If you liked Two Truths and a Lie, please leave a review on the Alexa Skills Store.",
    FALLBACK_ENDED: `I can't help you with that.  I will tell two truths and  a lie and you try to tell which one is the lie. Would you like to play?`,
    FALLBACK_STARTED: `Please indicate which difficulty you want: easy or hard?`,
    FALLBACK_THINKING: `Say which of the three statements was a lie, or say 'repeat the statements'.`,
    GUESS_CORRECT_MESSAGE: `%s Statement %s was indeed a lie! %s Here are the next three statements. ${SPEECH_STATEMENTS}`,
    GUESS_CORRECT_MESSAGE_COMPLETED_ALL: `%s Statement %s was indeed a lie! %s ${COMPLETED_ALL}`,
    LAUNCH_MESSAGE_FIRST_TIME: `Welcome to Two Truths and a Lie. In two truths and a lie, I will tell you three statements: two are true, and one is a lie. It is on you to tell which one is a lie. ${SAY_DIFFICULTY}`,
    LAUNCH_MESSAGE: `Welcome to Two Truths and a Lie. ${SAY_DIFFICULTY}`,
    LAUNCH_MESSAGE_DEBUG: `Welcome debugger. ${SAY_DIFFICULTY}`,
    INCORRECT_MESSAGE: `%s Statement %s was not a lie. Statement %s was a lie: %s Here are the next three statements. ${SPEECH_STATEMENTS}`,
    INCORRECT_MESSAGE_COMPLETED_ALL: `%s Statement %s was not a lie. Statement %s was a lie: %s ${COMPLETED_ALL}`,
    // REPEAT
    REPEAT_STATEMENTS:
      "The statements were: %s %s %s Which one do you think is a lie?",
    // HELP MESSAGES
    UNHANDLED_OTHER: "Oops, something went wrong.",
    UNHANDLED_STARTED:
      "Say a difficulty level, easy or hard, to start the game.",
    UNHANDLED_THINKING:
      "Say which of the three statements was a lie, or say 'repeat the statements'.",
    HELP_MESSAGE:
      "I will tell you two truths and a lie, you tell me which one is a lie and I will tell you if you were right.",
    ERROR_MESSAGE: "Sorry, an error occurred.",
    SAY_STATEMENTS: `Great! ${SPEECH_STATEMENTS}`,
    REPROMPT_STATEMENTS: `I tell you three statements and you guess which one is a lie. ${SPEECH_STATEMENTS}`,
    WHICH_DIFFICULTY_MESSAGE:
      "Nice! Which difficulty would you like to play, easy or hard?",
    // RESET
    RESET_CONFIRMATION_QUESTION:
      "Are you sure you want to reset? All of your progress will be lost.",
    RESET_SUCCESS_MESSAGE: `Successfully resetted your stats. ${SAY_DIFFICULTY}`,
    RESET_CANCEL_MESSAGE: `Okay, I did not reset your stats. ${SAY_DIFFICULTY}`,
  },
};
