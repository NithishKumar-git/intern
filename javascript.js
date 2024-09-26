document.getElementById('mc').addEventListener('click', function() {
    // Toggle dark mode for body
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode for the top navigation
    const topNav = document.querySelector('.top');
    topNav.classList.toggle('dark-mode');

    // Toggle dark mode for the main section
    const mainSection = document.querySelector('.main');
    mainSection.classList.toggle('dark-mode'); // Toggle dark mode for main

    // Toggle dark mode for buttons
    const buttons = document.querySelectorAll('.btnn, #mc, .nk');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    // Toggle dark mode for the h1 element
    const heading = document.querySelector('h1');
    heading.classList.toggle('dark-mode');
});
