// Node.js modules: fs for file system operations, path for file paths manipulation
const fs = require("fs").promises;
const path = require("path");

// () to convert text to HTML
function convertTextToHTML(text, title = "Converted Text to HTML") {
  // Split the input text into paragraphs at double line breaks & wrap each paragraph with <p> tags.
  const paragraphs = text
    .split("\n\n")
    .map((para) => `<p>${para.trim()}</p>`)
    .join("\n");
  // Replace single line breaks with <br> tags for proper paragraph formatting.
  const htmlContent = paragraphs.replace(/\n/g, "<br>");

  // Return the HTML content with the title & basic HTML structure.
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        ${htmlContent}
    </body>
    </html>`;
}

// () to read text file, convert it, & write HTML file
// async function to read the input file, convert its content to HTML, & write the output file
// using the convertTextToHTML function and fs module for file operations.
async function convertFile(inputFilePath, outputFilePath, title) {
  try {
    const data = await fs.readFile(inputFilePath, "utf8");
    const htmlContent = convertTextToHTML(data, title);
    await fs.writeFile(outputFilePath, htmlContent, "utf8");
    console.log(`File successfully converted to HTML: ${outputFilePath}`);
  } catch (err) {
    console.error("Error processing the file:", err);
  }
}

// Define input & output file paths
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.html");
const documentTitle = "My Document Title"; // Customizable title

// Convert the file using the defined paths & title
convertFile(inputFilePath, outputFilePath, documentTitle);
