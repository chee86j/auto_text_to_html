# Text to HTML Converter

Convert your text documents into clean, well-structured HTML with this Node.js tool. This utility reads a plain text file, applies HTML formatting to organize the content into paragraphs and line breaks, and outputs a fully formatted HTML document.

## Features

- **Paragraph Formatting**: Converts text blocks separated by double line breaks into neatly formatted HTML paragraphs.
- **Line Break Conversion**: Transforms single newline characters within paragraphs into `<br>` tags for proper in-paragraph spacing.
- **Customizable Titles**: Set a custom title for the HTML output to reflect the content or purpose of the document.

## Prerequisites

To use this script, ensure Node.js is installed on your system. Download it from the [Node.js official website](https://nodejs.org/).

## Installation

1. Download the script files to your system.
2. Place your source text file (`input.txt`) in the same directory as the script for easy access.

## Usage

Execute the script with Node.js by following these steps:

1. Open your command line interface.
2. Change to the directory containing the script.
3. Execute the command:

```bash
node <script_name>.js
```
4. Adjust the `<script_name>` to the name of your script file.

## Adjust Your Document Title
1. Modify the documentTitle variable in the script to personalize the title of the output HTML document:
`const documentTitle = "Custom Document Title";`
2. The script will generate an HTML file named output.html in the same directory & upon successful completion you will see:
`File successfully converted to HTML: path/to/your/output.html`
