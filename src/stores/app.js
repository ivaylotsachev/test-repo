import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            isInitialLoading: true,
            cursor: {
                text: '',
                className: '',
            },
            coordinates: { x: 0, y: 0 },
        };
    },
    actions: {
        setInitialLoading(value) {
            this.isInitialLoading = value;
        },
        setCursor(obj) {
            !obj.text && (obj.text = '');
            this.cursor = { ...this.cursor, ...obj };
        },
        setCoordinates({ x, y }) {
            this.coordinates = { x, y };
        },
    },
});
