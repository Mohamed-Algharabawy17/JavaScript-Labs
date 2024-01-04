# JavaScript Lab4: Implementing Person with Different Patterns

This lab explores different patterns for implementing a `Person` object with various JavaScript techniques, including Constructor functions, Classes, Objects Linking to Other Objects (OLOO), and Factory functions.

## Person Object

The `Person` object has the following attributes and methods:

### Attributes

- **fullName**: Full name of the person
- **money**: Amount of money the person has
- **sleepMood**: Current sleep mood (happy, tired, or lazy)
- **healthRate**: Health rate of the person

### Methods

#### sleep(hours)

- Description: Adjusts the sleep mood based on the number of hours slept.
- Parameters: `hours` - Number of hours slept.
- Behavior:
  - If `hours` is 7, sleep mood is set to 'Happy'.
  - If `hours` is less than 7, sleep mood is set to 'Tired'.
  - If `hours` is greater than 7, sleep mood is set to 'Lazy'.

#### eat(meals)

- Description: Adjusts the health rate based on the number of meals eaten.
- Parameters: `meals` - Number of meals eaten.
- Behavior:
  - If `meals` is 3, health rate is set to 100.
  - If `meals` is 2, health rate is set to 75.
  - If `meals` is 1, health rate is set to 50.

#### buy(items)

- Description: Decreases the amount of money based on the number of items bought.
- Parameters: `items` - Number of items bought.
- Behavior: Decreases the `money` attribute by 10 times the number of items bought.

## Project Structure

The project folder (`Lab4 JS`) contains individual script files for each implementation pattern:
- `Constructor.js`: Implementation using Constructor functions.
- `Class.js`: Implementation using Classes.
- `OLOO.js`: Implementation using Objects Linking to Other Objects.
- `Factory.js`: Implementation using Factory functions.

## How to Run Scripts

1. Open `index.html` in a web browser.
2. Uncomment the desired script (`Constructor.js`, `Class.js`, `OLOO.js`, or `Factory.js`) to run it.
3. Refresh the page, and the chosen script will execute.
