# markitdown-cli

A simple command-line interface (CLI) tool to convert PDF files into Markdown text using the [markitdown-ts](https://github.com/dead8309/markitdown-ts) library. Designed for straightforward usage and distribution via npm or Bun, with optional output file support.

---

## Features

* Convert PDF documents to Markdown in one command
* Print Markdown output to `stdout` or save to a `.md` file
* Minimal, non-interactive interface
* Installable via npm or runnable via `npx` / `bun x`

---

## Prerequisites

* Node.js (>= 14) and npm, **or** Bun runtime
* An installed copy of the `markitdown-ts` package is a dependency of this CLI

---

## Installation

### Using npm

```bash
# Install globally
npm install -g markitdown-cli

# Or use without installing globally
npx markitdown-cli <path/to/file.pdf>
```

### Using Bun

```bash
# Install globally
bun add -g markitdown-cli

# Or use without installing globally
bun x markitdown-cli <path/to/file.pdf>
```

---

## Usage

Basic usage:

```bash
markitdown-cli <input.pdf>
```

This will read `input.pdf`, convert it to Markdown, and print the result to the terminal.

### Options

* `-o, --output <file.md>`

  Save the converted Markdown into the specified file instead of printing it to `stdout`.

### Examples

```bash
# Convert and print to terminal
markitdown-cli report.pdf

# Convert and save to a file
markitdown-cli report.pdf -o report.md
```

---

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/markitdown-cli.git
cd markitdown-cli
npm install    # or bun install
```

Build the project:

```bash
npm run build  # or bun run build
```

Link the CLI locally (for testing):

```bash
npm link       # or bun link
```

Run the CLI against a local PDF:

```bash
markitdown-cli ./examples/demo.pdf -o demo.md
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request on GitHub.

---

## License

This project is licensed under the [MIT License](LICENSE) — see the `LICENSE` file for details.
