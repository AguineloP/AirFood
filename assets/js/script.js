document.addEventListener('DOMContentLoaded', (event) => {
    const ptButton = document.getElementById('ptButton');
    const enButton = document.getElementById('enButton');

    ptButton.addEventListener('click', () => {
        switchLanguage('pt');
    });

    enButton.addEventListener('click', () => {
        switchLanguage('en');
    });

    const switchLanguage = (lang) => {
        if (lang === 'pt') {
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.en').forEach(el => el.style.display = 'none');
        } else if (lang === 'en') {
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.en').forEach(el => el.style.display = 'block');
        }
        localStorage.setItem('preferredLanguage', lang);
    };

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        switchLanguage('pt');
    }
});
