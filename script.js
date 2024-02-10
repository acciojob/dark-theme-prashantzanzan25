function swapTheme() {
  var app = document.getElementById('app');
  var swapButton = document.getElementById('swap');

  if (app.classList.contains('day')) {
    app.classList.remove('day');
    app.classList.add('night');
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
  } else {
    app.classList.remove('night');
    app.classList.add('day');
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
  }
}
