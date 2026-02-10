# CLI Utility Toolkit

A tiny interactive command-line utility written in Node.js. It provides three simple tools via a menu-driven prompt: even/odd checker, prime checker, and a basic calculator.

## Prerequisites

- Node.js (v12+)

## Installation

From the project root install the dependency used by the CLI:

```bash
npm install prompt-sync
```

(If you prefer installing dependencies from the `cli_utility_toolKit` folder, `cd cli_utility_toolKit && npm install prompt-sync`.)

## Run

You can run the CLI from the repository root:

```bash
node cli_utility_toolKit/index.js
```

Or change into the toolkit folder and run:

```bash
cd cli_utility_toolKit
node index.js
```

## Menu & Options

When started the CLI prompts you to enter a number (1–4):

- `1` — Check Even or Odd
  - Repeatedly prompts for numbers and prints whether each number is even or odd.
  - Input accepts decimals (uses `parseFloat`) but parity is determined by `% 2`.
- `2` — Check Prime
  - Repeatedly prompts for a number and reports whether it is prime.
  - Numbers < 2 are reported as not prime.
- `3` — Calculation
  - Prompts for two numbers and an operator (`+`, `-`, `*`, `/`, `%`) and shows the result.
  - After each calculation you can choose to continue.
- `4` — Exit
  - Exits the program.

Example interaction (user input shown after colons):

```
Enter 1 to 4 for :- 
 1: Check Even or Odd,
 2: Ceck Prime
 3: Calculation
 4: None.
: 1
Enter a Number to check if it's Even or Odd: 42
Yes 42 is Even
Do you Want to Continue? (y / n) : n
):
```

## Notes & Limitations

- The CLI uses `prompt-sync` for synchronous terminal input.
- Number inputs are parsed with `parseFloat`. Non-numeric input may produce `NaN` and unexpected results.
- Division by zero is not specially handled (JavaScript will produce `Infinity` or `NaN`).
- The prime checker uses trial division up to `Math.round(Math.sqrt(num))`.

## Contributing

Small improvements welcome: add input validation, better menu parsing, or more utilities.

## License

This project is provided as-is. Add a license file if you intend to publish.
