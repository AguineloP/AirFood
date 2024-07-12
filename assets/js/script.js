document.addEventListener('DOMContentLoaded', function () {
    var ptButton = document.getElementById('ptButton');
    var enButton = document.getElementById('enButton');
    var ptTexts = document.querySelectorAll('.pt');
    var enTexts = document.querySelectorAll('.en');
    var buttons = document.querySelectorAll('button[data-lang-pt][data-lang-en]');
    var titles = document.querySelectorAll('h2[data-lang-pt][data-lang-en]');
    var pageTitle = document.querySelector('title');

    ptButton.addEventListener('click', function () {
        toggleLanguage('pt');
    });

    enButton.addEventListener('click', function () {
        toggleLanguage('en');
    });

    function toggleLanguage(lang) {
        if (lang === 'pt') {
            ptTexts.forEach(function (text) {
                text.style.display = 'block';
            });
            enTexts.forEach(function (text) {
                text.style.display = 'none';
            });
            buttons.forEach(function (button) {
                button.textContent = button.getAttribute('data-lang-pt');
            });
            titles.forEach(function (title) {
                title.textContent = title.getAttribute('data-lang-pt');
            });
            pageTitle.textContent = pageTitle.getAttribute('data-lang-pt');
        } else if (lang === 'en') {
            ptTexts.forEach(function (text) {
                text.style.display = 'none';
            });
            enTexts.forEach(function (text) {
                text.style.display = 'block';
            });
            buttons.forEach(function (button) {
                button.textContent = button.getAttribute('data-lang-en');
            });
            titles.forEach(function (title) {
                title.textContent = title.getAttribute('data-lang-en');
            });
            pageTitle.textContent = pageTitle.getAttribute('data-lang-en');
        }
    }
});
