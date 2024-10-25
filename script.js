// Простой интерактивный скрипт для отображения фона при наведении
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.backgroundColor = "#f0f8ff";
    });
    section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = "#fff";
    });
});
