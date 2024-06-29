export function animateEntry(element: HTMLElement) {
    element.classList.add('fadeIn');
    setTimeout(() => element.classList.remove('fadeIn'), 1000);
}
