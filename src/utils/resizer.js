import { useAppStore } from '../stores/app';

const resizer = () => {
    const store = useAppStore();
    const html = document.querySelector('html');

    function debounce(func, time) {
        time = time || 100;
        let timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, time, event);
        };
    }

    function resizeContent() {
        if (window.innerWidth <= 1024) {
            store.setIsMobile(true);
            html.classList.add('js-is-mobile');
        } else {
            store.setIsMobile(false);
            html.classList.remove('js-is-mobile');
        }
    }

    window.addEventListener('resize', debounce(resizeContent, 150));
};

export default resizer;
