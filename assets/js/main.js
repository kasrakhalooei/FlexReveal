const panels = document.querySelectorAll('.panel');

function open_box() {
    panels.forEach(panel => panel.classList.remove('open'))
    this.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click' , open_box))