function updateTitleAndHeading() {
    var titleInput = document.getElementById('titleInput').value;
    var headingInput = document.getElementById('headingInput').value;

    // Update the document's title
    document.title = titleInput || 'Enter Title Here';

    // Update the <h1> heading
    var heading = document.getElementById('mainHeading');
    heading.textContent = headingInput || 'Enter Heading Here';
}
