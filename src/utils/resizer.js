import { useAppStore } from '../stores/app';

const resizer = () => {
    const store = useAppStore();
    console.log(store.isInitialLoading);

    function debounce(func, time) {
        time = time || 100; // 100 by default if no param
        let timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, time, event);
        };
    }

    function resizeContent() {
        // Do loads of stuff once window has resized
        console.log('resized', window.innerWidth);
        window.innerWidth <= 1024
            ? store.setIsMobile(true)
            : store.setIsMobile(false);
    }

    window.addEventListener('resize', debounce(resizeContent, 150));
};

export default resizer;
