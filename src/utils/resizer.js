import { useAppStore } from '../stores/app';

const resizer = () => {
    const store = useAppStore();

    function debounce(func, time) {
        time = time || 100;
        let timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, time, event);
        };
    }

    function resizeContent() {
        window.innerWidth <= 1024
            ? store.setIsMobile(true)
            : store.setIsMobile(false);
    }

    window.addEventListener('resize', debounce(resizeContent, 150));
};

export default resizer;
