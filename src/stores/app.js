import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            activePage: '',
            isInitialLoading: true,
            isMobile: false,
            cursor: {
                className: '',
            },
            mouseCoordinates: { x: 0, y: 0 },
            router: { to: '', from: '' },
        };
    },
    actions: {
        setRouter(obj) {
            this.router = obj;
        },

        setActivePage(value) {
            this.activePage = value;
        },

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
