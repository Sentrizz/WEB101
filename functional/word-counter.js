// 2. Passing Values Around
// Helper function to count words in a string
function countWords(the_text) {
    return the_text.split(" ").length;
}

// Helper function to convert word count to minutes
function wordsToMinutes(words) {
    return words / 250;
}

// 1. Functional Programming & 3. Argument Validation
// Main function that validates the element and updates its text
function insertReadingTime($p) {
    if ($p.innerText && $p.matches("p")) {
        let words = countWords($p.innerText);
        let duration = wordsToMinutes(words);
        $p.innerText += " (Reading time: " + duration + " minutes)";
    }
}

// 4. Loop Through All Paragraphs
// Select all paragraphs on the page and loop through them
let $paragraphs = document.querySelectorAll("p");
let count = $paragraphs.length;

for (let i = 0; i < count; i++) {
    insertReadingTime($paragraphs[i]);
}
