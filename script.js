document.getElementById('theme-toggle').addEventListener('click', function() {
  try {
    document.body.classList.toggle('dark-mode');
  } catch (e) {
    alert('Sorry, theme toggle failed.');
    console.error(e);
  }
});

fetch('https://api.github.com/users/rhit-jackslc/repos')
  .then(response => response.json())
  .then(repos => {
    const list = document.getElementById('repo-list');
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>: ${repo.description || ''}`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById('repo-list').innerText = 'Could not load GitHub projects.';
  });

