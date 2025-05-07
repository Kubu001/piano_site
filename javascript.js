// Select all question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question button
faqQuestions.forEach(question => {
    // Add a click event listener to each question
    question.addEventListener('click', () => {
        // Close any other open answers except the one clicked
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active'); // Remove 'active' class to reset arrow rotation
                item.nextElementSibling.style.maxHeight = null; // Collapse the answer
            }
        });

        // Toggle 'active' class on the clicked question to rotate the arrow
        question.classList.toggle('active');

        // Select the corresponding answer div
        const answer = question.nextElementSibling;

        // Check if the answer is already open
        if (answer.style.maxHeight) {
            // If open, close it by resetting max-height
            answer.style.maxHeight = null;
        } else {
            // If closed, set max-height to scrollHeight to expand it
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

var WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
var BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

var keys = document.querySelectorAll('.key');
var whiteKeys = document.querySelectorAll('.white.key')
var blackKeys = document.querySelectorAll('.black.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
    if (e.repeat) return;

    var key = e.key;
    var whiteKeyIndex = WHITE_KEYS.indexOf(key);
    var blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function playNote(key) {
    var noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0
    noteAudio.play();
    key.classList.add('active');

    sleep(500).then(() => { key.classList.remove('active'); });
} 