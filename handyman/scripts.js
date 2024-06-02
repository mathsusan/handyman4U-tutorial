function toggleFunction() {
  var header = document.getElementById('main-header');
  if (header.classList.contains('open')) {
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
}
