const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Periksa memori browser untuk preferensi tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
}

// Handler klik tombol Dark Mode
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateButtonText('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText('dark');
    }
});

function updateButtonText(theme) {
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}
