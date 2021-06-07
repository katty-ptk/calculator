const buttons = document.querySelectorAll('button');
for ( let i = 0; i < buttons.length; i++ ) {
    console.log(buttons[i].textContent);
}

buttons.forEach( button => function() {
    button.addEventListener('click', function() {
        alert('clicked ' + button.textContent);
    });
});