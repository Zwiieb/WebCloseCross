window.addEventListener('DOMContentLoaded', adjustFontSize);

function adjustFontSize() {
    let container = document.querySelector('.label');
    let label = document.querySelector('.close');

    let containerWidth = container.offsetWidth;
    let labelWidth = label.offsetWidth;

    let fontSize = parseInt(window.getComputedStyle(label).fontSize);

    let facteur = containerWidth/labelWidth;

    label.style.fontSize = fontSize*facteur + 'px';

}
