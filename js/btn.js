var buttons = document.getElementsByClassName('btn');

for (var i = 0; i < buttons.length; i++) {
    if (!buttons.hasOwnProperty(i)) {
        continue;
    }

    var button = buttons[i];
    button.addEventListener('click', function() {
        alert('хуй');
    });
}