document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('toggle-switch');
  themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-theme' class on the body
    document.body.classList.toggle('dark-theme');

    // Save the user's preference to local storage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Check for saved user preference, if any, on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
