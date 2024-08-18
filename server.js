// Import Required Modules
const express = require("express");
const fileUpload = require("express-fileupload");
const { convertTextToHTML } = require("./convert.js");
const path = require("path");
const fs = require("fs").promises; // Correctly using fs.promises for async/await
const app = express(); // Instance of Express to Handle Routes
const port = 3000; // Defined Port for the Server

// Middleware to serve static files from 'public' directory
app.use(express.static("public"));

// File Upload Middleware
app.use(fileUpload());

// Route Definitions
// GET Request to Serve the HTML Form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// POST Request to Convert the Uploaded File
// Make sure this function is async as it uses await
app.post("/convert", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No Files Were Uploaded.");
  }
  // Access uploaded file, define output path, & convert the text to HTML.
  const inputFile = req.files.inputFile;
  const outputPath = path.join(__dirname, "public", "output.html");
  try {
    const htmlContent = convertTextToHTML(
      inputFile.data.toString(),
      "Converted HTML"
    );
    await fs.writeFile(outputPath, htmlContent, "utf8");
    res.send("File Has Been Converted & Saved as Output.html");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the Express Server on the Defined Port
app.listen(port, () => {
  console.log(
    `Server is running at http://localhost:${port}. Please proceed to the form at http://localhost:3000.`
  );
});
