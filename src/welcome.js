import readline from 'readline'
import chalk from 'chalk'

/**
 * Creates the interface to read user input and displays messages.
 */
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Shows the welcome header.
 */
function showHeader () {
  console.log(chalk.blue.bold('Welcome to the course 1DV610!🎓😃'))
  console.log(chalk.cyan('==================================='))
  console.log(chalk.green('Introduction to Software Quality'))
  console.log(chalk.cyan('===================================\n'))
}

/**
 * Shows the welcome message for the user.
 *
 * @param {string} userName - The users name.
 */
function showMessage (userName) {
  console.log(chalk.magenta('\n                   ✨ Welcome Message ✨                    '))
  console.log(chalk.yellow('==============================================================='))
  console.log(chalk.green.bold(`Hello ${userName}! 👋`))
  console.log(chalk.blue('Ready for the course 1DV610 - Introduction to Software Quality?'))
  console.log(chalk.red('Hopefully you are not as nervous as I am😆'))
  console.log(chalk.red('Good luck!🥰'))
  console.log(chalk.yellow('===============================================================\n'))
}

/**
 * The main function that runs the program.
 */
function start () {
  showHeader()

  input.question(chalk.cyan('What is your name? '), (answer) => {
    const name = answer.trim()

    if (name === '') {
      console.log(chalk.red.bold('You must enter your name!'))
      input.close()
      return
    }

    showMessage(name)
    input.close()
  })
}

// Starts the program.
start()
