export const lettering = (text, node) => {
    [...text].forEach((ch) => {
        const mask = document.createElement('div');
        const char = document.createElement('p');

        mask.classList.add('mask');
        char.textContent = ch;

        if (ch === ' ') mask.classList.add('spacer');

        mask.appendChild(char);
        node.appendChild(mask);
    });
};
