// Função para definir o idioma e salvar no localStorage
function setLanguage(language) {
    localStorage.setItem('preferredLanguage', language);

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

// Função para carregar o idioma preferido do localStorage
function loadPreferredLanguage() {
    var preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        setLanguage(preferredLanguage);
    } else {
        // Se não houver idioma preferido, definir como português por padrão
        setLanguage('pt');
    }
}

// Eventos para os botões de idioma
document.getElementById('ptButton').addEventListener('click', function() {
    setLanguage('pt');
});

document.getElementById('enButton').addEventListener('click', function() {
    setLanguage('en');
});

// Carregar o idioma preferido ao abrir a página
document.addEventListener('DOMContentLoaded', function() {
    loadPreferredLanguage();
});
