document.getElementById('ptButton').addEventListener('click', function() {
    setLanguage('pt');
});

document.getElementById('enButton').addEventListener('click', function() {
    setLanguage('en');
});

function setLanguage(language) {
    var ptElements = document.querySelectorAll('.pt');
    var enElements = document.querySelectorAll('.en');

    if (language === 'pt') {
        ptElements.forEach(function(element) {
            element.style.display = 'block';
        });
        enElements.forEach(function(element) {
            element.style.display = 'none';
        });
    } else if (language === 'en') {
        ptElements.forEach(function(element) {
            element.style.display = 'none';
        });
        enElements.forEach(function(element) {
            element.style.display = 'block';
        });
    }
}
