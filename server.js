// Import Required Modules
const express = require('express');
const fileUpload = require('express-fileupload');
const { convertTextToHTML } = require('./convert.js');
const app = express(); // Instance of Express to Handle Routes
const port = 3000; // Defined Port for the Server

// File Upload Middleware
app.use(fileUpload());

// Route Definitions
// GET Request to Serve the HTML Form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// POST Request to Convert the Uploaded File
// Check if files were uploaded in request & if not, return an error.
app.post('/convert', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No Files Were Uploaded.');
  }
  // Access uploaded file, define output path, & convert the text to HTML.
  const inputFile = req.files.inputFile;
  const outputPath = path.join(__dirname, 'output.html');
  const htmlContent = convertTextToHTML(inputFile.data.toString(), "Converted HTML");
  fs.writeFile(outputPath, htmlContent, 'utf8', (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File Has Been Converted and Saved as Output.html');
  });
});

// Start the Express Server on the Defined Port
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}. Please Proceed to the Form at http://localhost:3000.`);
});
