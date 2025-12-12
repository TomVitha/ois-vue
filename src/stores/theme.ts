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
        document.documentElement.setAttribute("data-bs-theme-base", "neutral"); // Base theme fixed to "neutral"
    }

    function initTheme() {
        const getValidTheme = (value: string | null) => value && validThemes.includes(value) ? value : null;
        const urlParamTheme = getValidTheme(new URLSearchParams(window.location.search).get("theme"));
        const storedTheme = getValidTheme(localStorage.getItem("theme"));
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = urlParamTheme || storedTheme || systemTheme;
        applyTheme(initialTheme);
    }

    // Watching the state and its changes through the $subscribe() method of a store
    useThemeStore().$subscribe((mutation, state) => {
        // applyTheme(state.theme);
    })

    return { theme, applyTheme, initTheme, validThemes, validThemeBases }
})
