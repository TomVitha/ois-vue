import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('light')

    const validThemes = ["light", "dark"];
    const validThemeBases = ["slate", "gray", "zinc", "neutral", "stone"];

    function applyTheme(newTheme: string) {
        // Validate theme
        if (!validThemes.includes(newTheme)) {
            console.error(`Invalid theme "${newTheme}"`);
            return;
        }

        theme.value = newTheme;
        localStorage.setItem("theme", theme.value);
        document.documentElement.setAttribute("data-bs-theme", newTheme);
    }

    function initTheme() {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme && validThemes.includes(storedTheme)) {
            // Load from localStorage
            applyTheme(storedTheme);
        } else {
            // Default to system preference
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            applyTheme(systemTheme);
        }
    }

    // Watching the state and its changes through the $subscribe() method of a store
    useThemeStore().$subscribe((mutation, state) => {
        // console.debug('Theme store changed:', mutation, state)
        // applyTheme(state.theme);
    })

    return { theme, applyTheme, initTheme, validThemes, validThemeBases }
})
