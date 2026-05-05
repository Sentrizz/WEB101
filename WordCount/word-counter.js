// Find the first paragraph
let firstParagraph = document.querySelector("p");

// Get the text and split it into an array of words
let text = firstParagraph.innerText;
let wordsArray = text.split(" ");
let wordCount = wordsArray.length;

// Calculate reading time (assuming 225 words per minute)
let readingTime = Math.round(wordCount / 225);

// Create the text string
let timeMessage = "Estimated reading time: " + readingTime + " minute(s).";

// Create a new <p> element and set its text
let newParagraph = document.createElement("p");
newParagraph.innerText = timeMessage;

// Insert the new paragraph before the first paragraph
firstParagraph.parentNode.insertBefore(newParagraph, firstParagraph);
