document.getElementById('theme-toggle').addEventListener('click', function() {
  try {
    document.body.classList.toggle('dark-mode');
  } catch (e) {
    alert('Sorry, theme toggle failed.');
    console.error(e);
  }
});
