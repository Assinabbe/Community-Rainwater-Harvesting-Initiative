document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
    });
});
