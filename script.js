document.addEventListener('DOMContentLoaded', function() {
    
    document.body.style.backgroundColor = '#333';

    document.querySelector('form').addEventListener('submit', function(event) {
        console.log('Form submitted');
    });
});
