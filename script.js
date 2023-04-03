const iconContainer = document.querySelector('.icon_container');
const focusBars = document.querySelectorAll('.focus-bar');

iconContainer.addEventListener('click', (event) => {
    const icon = event.target.closest('.icon');
    if (!icon) return;

    // Añade la clase 'active' al elemento correspondiente de focusBars
    const index = [...iconContainer.children].indexOf(icon.parentElement);
    focusBars[index].classList.add('active');

    // Remueve la clase 'active' de los demás elementos de focusBars
    for (let i = 0; i < focusBars.length;