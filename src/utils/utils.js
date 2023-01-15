export const setElementHeight = (nodeClass) => {
    const style = getComputedStyle(document.querySelector('.main-header'));
    const element = document.querySelector(nodeClass);

    requestAnimationFrame(() => {
        element.style.marginTop = `${style.height}`;
        element.style.minHeight = `calc(100vh - ${style.height})`;
    });
};
