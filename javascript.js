document.getElementById('mc').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const main = document.querySelector('.main');
    const top = document.querySelector('.top');
    const button = document.getElementById('mc');
    

    main.classList.toggle('dark-mode');
    top.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    

    
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Dark Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
});
