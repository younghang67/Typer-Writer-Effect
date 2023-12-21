function startTyping() {
    const userInput = document.getElementById('user-input').value;
    const typingTextElement = document.getElementById('typing-text');

    // Clear previous content
    typingTextElement.innerHTML = '';

    // Split the user input into an array of characters
    const characters = userInput.split('');

    // Initialize a counter for animation
    let i = 0;

    // Use setInterval to simulate typing animation
    const typingInterval = setInterval(function () {
        // Add the next character to the typing text element
        typingTextElement.innerHTML += characters[i];

        // Move to the next character
        i++;

        // Check if all characters have been typed
        if (i === characters.length) {
            clearInterval(typingInterval); // Stop the interval when done
        }
    }, 100); // Adjust the interval duration (milliseconds) for your desired typing speed
}
