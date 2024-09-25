// Add this to your javascript.js
document.getElementById('mc').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const topNav = document.querySelector('.top');
    topNav.classList.toggle('dark-mode');
    
    const mainSection = document.querySelector('.main');
    mainSection.classList.toggle('dark-mode'); // Toggle dark mode for main

    const buttons = document.querySelectorAll('.btnn, #mc,.nk');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });
});
