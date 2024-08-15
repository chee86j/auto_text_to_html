# Text to HTML Converter

Convert your text documents into clean, well-structured HTML with this Node.js-based web application utility . It allows users to upload text files through a web interface, automatically formats the content into HTML with proper paragraph and line break handling, and provides a downloadable HTML file as output.

## Features

- **Paragraph Formatting**: Converts text blocks separated by double line breaks into neatly formatted HTML paragraphs.
- **Line Break Conversion**: Transforms single newline characters within paragraphs into `<br>` tags for proper in-paragraph spacing.
- **Customizable Titles**: Set a custom title for the HTML output to reflect the content or purpose of the document.

## Prerequisites

To use this script, ensure Node.js is installed on your system. Download it from the [Node.js official website](https://nodejs.org/).
You may need to update your dependencies by running `npm update`.

## Installation

Follow these steps to set up the project:

1. Clone or download the repository to your local machine.
2. Navigate to the project directory.
3. Install the required Node modules:
   ```bash
   npm install express express-fileupload path
   ```

## Usage

To use the application, start the server & access the web interface:

1. `node server.js`
2. Navigate on a web browser to `http://localhost:3000`.
3. Use the web form to upload a `.txt` file and click `Convert` to transform it into HTML.
4. Upon successful conversion, the server will save the HTML file as `output.html` in the project directory and provide a link to download the HTML file.

## Adjust Your Document Title
1. Modify the documentTitle variable in the script to personalize the title of the output HTML document:
`const documentTitle = "Custom Document Title";`
2. The application generates an HTML file named output.html in the project directory. You will see a success message on the web page and a link to download the converted HTML file.

## Customization
You can customize the HTML template used for conversion in the `convert.js` file to include
any additional HTML elements or styling as desired.