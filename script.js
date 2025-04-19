if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
  try {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  } catch (e) {
    console.error("Theme toggle failed:", e);
  }
});
