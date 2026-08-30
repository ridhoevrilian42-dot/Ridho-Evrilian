const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek memori browser: Apakah sebelumnya user memakai Dark Mode?
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
}

// Saat tombol diklik
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light'); // Simpan pilihan ke memori
        updateButtonText('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Simpan pilihan ke memori
        updateButtonText('dark');
    }
});

// Mengubah teks tombol sesuai tema
function updateButtonText(theme) {
    if (theme === 'dark') {
        themeToggle.innerText = '☀️ Light Mode';
    } else {
        themeToggle.innerText = '🌙 Dark Mode';
    }
}