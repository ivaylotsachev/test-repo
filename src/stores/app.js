import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            isInitialLoading: true,
            isMobile: false,
            cursor: {
                className: '',
            },
            mouseCoordinates: { x: 0, y: 0 },
        };
    },
    actions: {
        setIsMobile(value) {
            this.isMobile = value;
        },

        setInitialLoading(value) {
            this.isInitialLoading = value;
        },

        setCursor(className = '') {
            this.cursor = { ...this.cursor, className };
        },

        setMouseCoordinates({ x, y }) {
            this.mouseCoordinates = { x, y };
        },
    },
});
